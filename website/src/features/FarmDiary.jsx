// 📓 Krushi Mitra Pro — Farm Diary with Conflict Pre-Check & Judge Debug State Panel
import React, { useState, useEffect } from 'react';
import { getDiaryAnalysis } from '../services/ai';
import { checkDiaryActivityConflict, logConflictOverride } from '../services/conflictCheckService';
import { BookOpen, Plus, IndianRupee, Trash2, TrendingUp, Sparkles, CheckCircle, AlertOctagon, Bug, ShieldAlert } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, onSnapshot, addDoc, doc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

import { getWeather } from '../services/weather';

export default function FarmDiary({ diaryEntries = [], setDiaryEntries = () => {}, profile = {}, apiKey, weather }) {
  const [activity, setActivity] = useState('');
  const [cost, setCost] = useState('');
  const [isExpense, setIsExpense] = useState(true);
  const [date, setDate] = useState(new Date().toISOString().split('T')[0]);
  const [liveEntries, setLiveEntries] = useState([]);
  const [aiReport, setAiReport] = useState('');
  const [loadingAI, setLoadingAI] = useState(false);
  const [showJudgeDebug, setShowJudgeDebug] = useState(false);
  const [liveWeather, setLiveWeather] = useState(weather || null);

  // Conflict state
  const [conflictModalData, setConflictModalData] = useState(null);
  const [overrideReason, setOverrideReason] = useState('');

  // Fetch live weather if not passed
  useEffect(() => {
    if (!liveWeather) {
      getWeather(19.9975, 73.7898, profile.district || 'Nashik', apiKey).then(w => setLiveWeather(w));
    }
  }, [weather, profile.district, apiKey]);

  const activeWeather = liveWeather || {
    temperature: 28,
    condition: 'Rain',
    rainChance: 80.0,
    humidity: 85,
    windSpeed: 18.0
  };

  const lang = profile.language || 'hi';
  const formatText = (textHi, textEn) => lang === 'hi' ? textHi : textEn;

  // Real-time Firestore sync
  useEffect(() => {
    try {
      const q = query(collection(db, 'farmers', profile.id || 'demo_farmer', 'diary'), orderBy('date', 'desc'));
      const unsub = onSnapshot(q, (snap) => {
        const items = snap.docs.map(d => ({ id: d.id, ...d.data() }));
        setLiveEntries(items);
        if (setDiaryEntries) setDiaryEntries(items);
      }, (err) => console.warn('Diary sync error:', err));
      return () => unsub();
    } catch (e) {
      console.warn('Firebase diary error:', e);
    }
  }, [profile.id]);

  const displayEntries = liveEntries.length > 0 ? liveEntries : diaryEntries;

  // Handle Add Entry submit with Pre-Submission Conflict Check
  const handlePreSubmit = (e) => {
    e.preventDefault();
    if (!activity.trim() || !cost) return;

    // RUN CONFLICT CHECK
    const conflictResult = checkDiaryActivityConflict(activity, date, activeWeather);

    if (conflictResult.hasConflict) {
      // BLOCK AND SHOW CONFLICT MODAL
      setConflictModalData(conflictResult);
    } else {
      // SAFE TO COMMIT
      commitEntry();
    }
  };

  const commitEntry = async () => {
    const newEntry = {
      activity: activity.trim(),
      cost: parseFloat(cost),
      isExpense,
      date,
      createdAt: serverTimestamp()
    };

    try {
      await addDoc(collection(db, 'farmers', profile.id || 'demo_farmer', 'diary'), newEntry);
    } catch (err) {
      console.error('Firestore diary write error:', err);
    }

    setActivity('');
    setCost('');
    setConflictModalData(null);
    setOverrideReason('');
  };

  const handleOverrideSubmit = async () => {
    if (conflictModalData) {
      await logConflictOverride(
        profile.id || 'web_farmer',
        activity,
        conflictModalData.title,
        conflictModalData.rainChance,
        overrideReason || 'Farmer decided to proceed despite rain warning'
      );
    }
    commitEntry();
  };

  const handleDeleteEntry = async (id) => {
    try {
      await deleteDoc(doc(db, 'farmers', profile.id || 'demo_farmer', 'diary', id));
    } catch (err) {
      console.error('Diary delete error:', err);
    }
  };

  const income = displayEntries.filter(e => !e.isExpense).reduce((sum, e) => sum + parseFloat(e.cost || 0), 0);
  const expense = displayEntries.filter(e => e.isExpense).reduce((sum, e) => sum + parseFloat(e.cost || 0), 0);
  const totalBalance = income - expense;

  const handleGetAdvisory = async () => {
    setLoadingAI(true);
    setAiReport('');
    try {
      const response = await getDiaryAnalysis({ profile, diaryEntries: displayEntries }, apiKey);
      setAiReport(response);
    } catch (e) {
      setAiReport("⚠️ Failed to generate financial analysis. Please configure your API key.");
    } finally {
      setLoadingAI(false);
    }
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <BookOpen style={{ color: 'var(--primary-emerald)' }} />
            {formatText("खेती का बही-खाता (Farm Diary)", "Digital Farm Diary & Conflict Check")}
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {formatText(
              "अपने दैनिक कृषि खर्चों और आमदनी का हिसाब रखें। स्मार्ट AI वित्तीय सलाह प्राप्त करें।",
              "Track daily agricultural inputs, labor, and crop sales with automated weather conflict detection."
            )}
          </p>
        </div>

        {/* Judge Debug Toggle */}
        <button 
          onClick={() => setShowJudgeDebug(!showJudgeDebug)} 
          className="btn-secondary" 
          style={{ fontSize: '0.8rem', padding: '6px 14px', gap: '6px', color: showJudgeDebug ? '#f59e0b' : 'var(--text-secondary)' }}
        >
          <Bug size={16} /> {showJudgeDebug ? "Hide Judge Debug Panel" : "🐞 Dev/Judge Debug Panel"}
        </button>
      </div>

      {/* JUDGE DEBUG PANEL */}
      {showJudgeDebug && (
        <div className="glass-panel" style={{ padding: '20px', background: 'rgba(245, 158, 11, 0.08)', border: '1px dashed #f59e0b', borderRadius: '12px' }}>
          <h4 style={{ color: '#f59e0b', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
            <Bug size={18} /> Judge Debug State & Live Weather Conflict Inspector
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', fontSize: '0.8rem' }}>
            <div style={{ background: 'var(--bg-surface)', padding: '12px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--primary-emerald)' }}>Live Weather Input Context:</strong>
              <pre style={{ margin: '6px 0 0', whiteSpace: 'pre-wrap', color: 'var(--text-secondary)' }}>
                {JSON.stringify(activeWeather, null, 2)}
              </pre>
            </div>
            <div style={{ background: 'var(--bg-surface)', padding: '12px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--secondary-cyan)' }}>Active Evaluator State:</strong>
              <p style={{ marginTop: '6px', color: 'var(--text-secondary)' }}>
                If activity = `Spraying/Fertilizer` &amp; Rain &gt; 60%, entry is BLOCKED with metric modal. Overrides are written to Firestore collection `conflict_logs`.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Financial Summary Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
        <div className="glass-panel" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Total Income</span>
          <h3 style={{ fontSize: '1.6rem', color: 'var(--primary-emerald)', marginTop: '4px' }}>₹{income.toLocaleString()}</h3>
        </div>

        <div className="glass-panel" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Total Expense</span>
          <h3 style={{ fontSize: '1.6rem', color: '#ef4444', marginTop: '4px' }}>₹{expense.toLocaleString()}</h3>
        </div>

        <div className="glass-panel" style={{ padding: '20px' }}>
          <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Net Profit / Loss</span>
          <h3 style={{ fontSize: '1.6rem', color: totalBalance >= 0 ? 'var(--primary-emerald)' : '#ef4444', marginTop: '4px' }}>
            ₹{totalBalance.toLocaleString()}
          </h3>
        </div>
      </div>

      {/* Entry Form */}
      <div className="glass-panel" style={{ padding: '24px' }}>
        <h3 style={{ fontSize: '1.1rem', marginBottom: '16px' }}>➕ {formatText("नया लेनदेन जोड़ें", "Add New Field Entry")}</h3>
        
        <form onSubmit={handlePreSubmit} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
          <div>
            <label className="form-label">Activity / Detail</label>
            <input 
              type="text" 
              placeholder="e.g. Pesticide Spraying / Harvest" 
              value={activity} 
              onChange={(e) => setActivity(e.target.value)} 
              className="form-input" 
              required 
            />
          </div>

          <div>
            <label className="form-label">Amount (₹)</label>
            <input 
              type="number" 
              placeholder="2500" 
              value={cost} 
              onChange={(e) => setCost(e.target.value)} 
              className="form-input" 
              required 
            />
          </div>

          <div>
            <label className="form-label">Type</label>
            <select value={isExpense ? "Expense" : "Income"} onChange={(e) => setIsExpense(e.target.value === "Expense")} className="form-input">
              <option value="Expense">Expense (खर्च)</option>
              <option value="Income">Income (आय)</option>
            </select>
          </div>

          <div>
            <label className="form-label">Date</label>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="form-input" />
          </div>

          <button type="submit" className="btn-primary" style={{ gridColumn: '1 / -1', justifyContent: 'center', marginTop: '8px' }}>
            <Plus size={18} /> Save Entry (With Conflict Check)
          </button>
        </form>
      </div>

      {/* CONFLICT BLOCK MODAL */}
      {conflictModalData && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.8)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="glass-panel animate-fade-in" style={{ background: 'var(--bg-surface)', width: '100%', maxWidth: '520px', padding: '28px', border: '2px solid #ef4444', borderRadius: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#ef4444', marginBottom: '14px' }}>
              <AlertOctagon size={32} />
              <h3 style={{ fontSize: '1.2rem' }}>{conflictModalData.title}</h3>
            </div>

            <p style={{ color: 'var(--text-primary)', fontSize: '0.92rem', lineHeight: '1.5', marginBottom: '16px' }}>
              {conflictModalData.description}
            </p>

            {/* Metric Displays */}
            <div style={{ background: 'rgba(239,68,68,0.1)', padding: '14px', borderRadius: '10px', display: 'flex', justifyContent: 'space-between', marginBottom: '16px', border: '1px solid rgba(239,68,68,0.3)' }}>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>Rain Probability:</span>
                <strong style={{ fontSize: '1.3rem', color: '#ef4444' }}>{conflictModalData.rainChance}%</strong>
              </div>
              <div>
                <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'block' }}>Forecast Horizon:</span>
                <strong style={{ fontSize: '0.95rem', color: '#f8fafc' }}>{conflictModalData.expectedTime}</strong>
              </div>
            </div>

            <div style={{ marginBottom: '20px' }}>
              <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>
                Optional Override Reason (Logged to Auditable Firestore Ledger):
              </label>
              <input 
                type="text" 
                placeholder="e.g. Using emergency rain-shield covering..." 
                value={overrideReason}
                onChange={(e) => setOverrideReason(e.target.value)}
                className="form-input"
              />
            </div>

            <div style={{ display: 'flex', gap: '12px', justifyContent: 'flex-end' }}>
              <button onClick={() => setConflictModalData(null)} className="btn-secondary">
                Cancel & Reschedule
              </button>
              <button onClick={handleOverrideSubmit} className="btn-primary" style={{ background: '#ef4444', borderColor: '#ef4444' }}>
                Proceed Anyway (Override & Log)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Entry List */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h3>Recent Entries ({displayEntries.length})</h3>
          <button onClick={handleGetAdvisory} disabled={loadingAI} className="btn-secondary" style={{ fontSize: '0.8rem', color: 'var(--primary-emerald)' }}>
            <Sparkles size={14} /> {loadingAI ? "Analyzing..." : "AI Financial Analysis"}
          </button>
        </div>

        {aiReport && (
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', border: '1px solid var(--primary-emerald)', padding: '16px', borderRadius: '10px', fontSize: '0.86rem', lineHeight: '1.6' }}>
            <strong style={{ color: 'var(--primary-emerald)', display: 'block', marginBottom: '8px' }}>🤖 AI Financial Advisor Report:</strong>
            <p style={{ whiteSpace: 'pre-wrap' }}>{aiReport}</p>
          </div>
        )}

        {displayEntries.map((item) => (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: 'var(--glass-bg)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
            <div>
              <strong style={{ fontSize: '0.92rem' }}>{item.activity}</strong>
              <span style={{ display: 'block', fontSize: '0.76rem', color: 'var(--text-secondary)' }}>📅 {item.date}</span>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
              <span style={{ fontWeight: '700', fontSize: '1rem', color: item.isExpense ? '#ef4444' : 'var(--primary-emerald)' }}>
                {item.isExpense ? '-' : '+'}₹{parseFloat(item.cost).toLocaleString()}
              </span>
              <button onClick={() => handleDeleteEntry(item.id)} style={{ background: 'transparent', border: 'none', color: 'var(--text-disabled)', cursor: 'pointer' }}>
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
