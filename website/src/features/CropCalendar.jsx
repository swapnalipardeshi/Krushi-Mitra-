// 📅 Krushi Mitra Pro — Crop Calendar with Soil Conflict Detection & Judge Debug State Panel
import React, { useState } from 'react';
import { Calendar as CalendarIcon, CalendarClock, Sprout, Droplets, Scissors, ShieldAlert, ShoppingBag, CheckSquare, Square, AlertOctagon, Bug, Info } from 'lucide-react';
import { checkSoilCalendarConflict } from '../services/conflictCheckService';

export default function CropCalendar({ profile = {} }) {
  const [selectedCrop, setSelectedCrop] = useState(profile.cropsGrown?.[0] || 'Tomato');
  const [sowingDate, setSowingDate] = useState(new Date().toISOString().split('T')[0]);
  const [checkedTasks, setCheckedTasks] = useState({});
  const [showJudgeDebug, setShowJudgeDebug] = useState(false);

  // User's Soil Advisor Report state
  const activeSoilReport = {
    soilType: profile.soilType || 'Black Cotton Soil',
    nitrogen: profile.nitrogen || 'High',
    phosphorus: profile.phosphorus || 'Medium',
    potassium: profile.potassium || 'Medium',
    ph: profile.ph || '7.2'
  };

  const lang = profile.language || 'hi';
  const formatText = (textHi, textEn) => lang === 'hi' ? textHi : textEn;

  const cropSchedules = {
    Tomato: [
      { days: 0, icon: <Sprout size={16} />, title: "Sowing", titleHi: "नर्सरी बुवाई", desc: "Sow seeds in nursery beds with vermicompost.", descHi: "कोकोपीट और केंचुआ खाद मिलाकर प्रो-ट्रे या नर्सरी क्यारी में बुवाई करें।" },
      { days: 25, icon: <Sprout size={16} />, title: "Transplanting", titleHi: "पौध रोपण", desc: "Transplant 25-day seedlings to main field with spacing.", descHi: "मुख्य खेत में मेड़ बनाकर पौधों का रोपण करें। ड्रिप लैटरल स्थापित करें।" },
      { days: 35, icon: <Droplets size={16} />, title: "Irrigation & Staking", titleHi: "सिंचाई और सहारा देना", desc: "Stake plants with bamboo. Apply water through drip.", descHi: "टमाटर के पौधों को बांस और रस्सी के सहारे बांधें। हल्की सिंचाई करें।" },
      { days: 45, icon: <Scissors size={16} />, title: "First Pruning & Fertilizer", titleHi: "छंटाई और यूरिया खाद", desc: "Apply Urea 35 kg/acre split dose and NPK 19:19:19.", descHi: "निचली शाखाओं की कटाई करें। 35 किलो यूरिया और 19:19:19 खाद दें।" },
      { days: 60, icon: <ShieldAlert size={16} />, title: "Pest monitoring", titleHi: "कीट निगरानी", desc: "Check for leaf miners/whiteflies. Spray neem oil.", descHi: "सफ़ेद मक्खी और फल छेदक कीटों के लिए फेरोमोन और पीले चिपचिपे कार्ड लगाएं।" },
      { days: 75, icon: <Droplets size={16} />, title: "Fruiting Spray", titleHi: "फल विकास सिंचाई", desc: "Apply Calcium Nitrate to prevent blossom end rot.", descHi: "कैल्शियम नाइट्रेट (2 ग्राम/लीटर) छिड़कें जिससे टमाटर गलने न पाएं।" },
      { days: 90, icon: <ShoppingBag size={16} />, title: "First Harvest", titleHi: "पहली तुड़ाई", desc: "Pick firm pink/red fruits for local mandi dispatch.", descHi: "बाजार भेजने के लिए थोड़े लाल-गुलाबी टमाटरों की पहली तुड़ाई शुरू करें।" }
    ],
    Wheat: [
      { days: 0, icon: <Sprout size={16} />, title: "Sowing", titleHi: "गेहूं बुवाई", desc: "Sow seeds with seed drill. Apply DAP basal dose.", descHi: "सीड ड्रिल से बुवाई करें। प्रति एकड़ 50 किलो डीएपी दें।" },
      { days: 21, icon: <Droplets size={16} />, title: "CRI Stage & Nitrogen", titleHi: "CRI सिंचाई और यूरिया", desc: "Most critical irrigation. Apply 40 kg Urea per acre.", descHi: "अत्यंत महत्वपूर्ण प्रथम सिंचाई। प्रति एकड़ 40 किलो यूरिया डालें।" },
      { days: 45, icon: <Scissors size={16} />, title: "Tillering stage", titleHi: "कल्ले निकलने की सिंचाई", desc: "Second irrigation. Spray zinc sulphate if yellowing.", descHi: "कल्ले फूटने के दौरान दूसरी सिंचाई दें। पीलापन दिखने पर जिंक छिड़कें।" },
      { days: 125, icon: <ShoppingBag size={16} />, title: "Harvesting", titleHi: "फसल कटाई", desc: "Harvest when ears turn yellow-brown.", descHi: "बालियां सूखने पर कम्बाइन हार्वेस्टर से कटाई करें।" }
    ]
  };

  const schedule = cropSchedules[selectedCrop] || cropSchedules.Tomato;

  const calculateDate = (days) => {
    const base = new Date(sowingDate);
    base.setDate(base.getDate() + days);
    return base.toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  };

  const toggleTask = (idx) => {
    const key = `${selectedCrop}_${sowingDate}_${idx}`;
    setCheckedTasks(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <CalendarClock style={{ color: 'var(--primary-emerald)' }} />
            {formatText("फसल कैलेंडर - शेड्यूलर", "Crop Planting Calendar Scheduler")}
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {formatText(
              "अपनी बुवाई की तिथि दर्ज करें और पूरी फसल अवधि के दौरान कार्यों की समय-सारणी प्राप्त करें।",
              "Generate a custom crop timeline showing weeding, fertilizing, and watering checkpoints based on your sowing date."
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

      {/* JUDGE DEBUG STATE PANEL */}
      {showJudgeDebug && (
        <div className="glass-panel" style={{ padding: '20px', background: 'rgba(245, 158, 11, 0.08)', border: '1px dashed #f59e0b', borderRadius: '12px' }}>
          <h4 style={{ color: '#f59e0b', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem' }}>
            <Bug size={18} /> Judge Debug State & Real-Time Conflict Inspector
          </h4>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', fontSize: '0.8rem' }}>
            <div style={{ background: 'var(--bg-surface)', padding: '12px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--primary-emerald)' }}>1. Active Soil Advisor Report State:</strong>
              <pre style={{ margin: '6px 0 0', whiteSpace: 'pre-wrap', color: 'var(--text-secondary)' }}>
                {JSON.stringify(activeSoilReport, null, 2)}
              </pre>
            </div>
            <div style={{ background: 'var(--bg-surface)', padding: '12px', borderRadius: '8px' }}>
              <strong style={{ color: 'var(--secondary-cyan)' }}>2. Calendar Evaluation Rule:</strong>
              <p style={{ marginTop: '6px', color: 'var(--text-secondary)' }}>
                Cross-referencing `calendarTask` vs `soilReport.nitrogen`. If task recommends Urea/Nitrogen and Soil Report is `High`, conflict flag is triggered!
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Input Row */}
      <div className="glass-panel" style={{ padding: '20px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
            {formatText("फसल का नाम", "Crop Name")}
          </label>
          <select value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)} className="form-input" style={{ padding: '12px' }}>
            {Object.keys(cropSchedules).map((crop, idx) => (
              <option key={idx} value={crop}>{crop}</option>
            ))}
          </select>
        </div>
        <div style={{ flex: 1, minWidth: '200px' }}>
          <label style={{ display: 'block', fontSize: '0.8rem', color: 'var(--text-secondary)', marginBottom: '6px' }}>
            {formatText("बुवाई की तारीख", "Sowing Date")}
          </label>
          <input type="date" value={sowingDate} onChange={(e) => setSowingDate(e.target.value)} className="form-input" style={{ padding: '12px' }} />
        </div>
      </div>

      {/* Timeline List */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {schedule.map((item, idx) => {
          const isDone = checkedTasks[`${selectedCrop}_${sowingDate}_${idx}`];
          const taskText = item.desc;
          
          // CONFLICT CHECK AGAINST SOIL REPORT
          const conflict = checkSoilCalendarConflict(taskText, activeSoilReport);

          return (
            <div key={idx} className="glass-panel" style={{ padding: '20px', opacity: isDone ? 0.6 : 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button onClick={() => toggleTask(idx)} style={{ background: 'transparent', border: 'none', color: isDone ? 'var(--primary-emerald)' : 'var(--text-secondary)', cursor: 'pointer' }}>
                    {isDone ? <CheckSquare size={22} /> : <Square size={22} />}
                  </button>
                  <div>
                    <h3 style={{ fontSize: '1rem', fontWeight: '700', textDecoration: isDone ? 'line-through' : 'none' }}>
                      {lang === 'hi' ? item.titleHi : item.title}
                    </h3>
                    <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>📅 Day {item.days} • {calculateDate(item.days)}</span>
                  </div>
                </div>
              </div>

              <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', paddingLeft: '34px' }}>
                {lang === 'hi' ? item.descHi : item.desc}
              </p>

              {/* CONFLICT DETECTED SIDE-BY-SIDE CARD */}
              {conflict.hasConflict && (
                <div style={{ marginLeft: '34px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', padding: '14px', borderRadius: '10px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ef4444', fontWeight: '700', fontSize: '0.88rem' }}>
                    <AlertOctagon size={18} /> SOIL REPORT CONFLICT DETECTED
                  </div>
                  
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', fontSize: '0.8rem', marginTop: '4px' }}>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '6px' }}>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.74rem' }}>Calendar Suggestion:</span>
                      <strong>{conflict.calendarAdvice}</strong>
                    </div>
                    <div style={{ background: 'rgba(0,0,0,0.3)', padding: '8px 12px', borderRadius: '6px' }}>
                      <span style={{ color: 'var(--text-secondary)', display: 'block', fontSize: '0.74rem' }}>Live Soil Test Result:</span>
                      <strong style={{ color: '#f59e0b' }}>{conflict.soilReportStatus}</strong>
                    </div>
                  </div>

                  <p style={{ fontSize: '0.82rem', color: '#f8fafc', marginTop: '2px', lineHeight: '1.4' }}>
                    {conflict.warningMessage}
                  </p>
                </div>
              )}

            </div>
          );
        })}
      </div>

    </div>
  );
}
