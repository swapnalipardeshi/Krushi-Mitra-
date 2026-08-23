// 🛡️ Krushi Mitra Pro — Multi-Role Admin & Moderation Dashboard
import React, { useState, useEffect } from 'react';
import { Shield, Users, AlertTriangle, ShoppingBag, Landmark, CheckCircle, Trash2, Edit3, Search, Lock, UserCheck, ShieldAlert, BarChart3 } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, onSnapshot, doc, updateDoc, deleteDoc, addDoc, serverTimestamp } from 'firebase/firestore';

export default function AdminDashboard({ profile, userRole = 'admin' }) {
  const [activeTab, setActiveTab] = useState('overview');
  const [farmers, setFarmers] = useState([]);
  const [posts, setPosts] = useState([]);
  const [listings, setListings] = useState([]);
  const [schemes, setSchemes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  // Scheme Modal state
  const [showSchemeModal, setShowSchemeModal] = useState(false);
  const [schemeName, setSchemeName] = useState('');
  const [schemeDesc, setSchemeDesc] = useState('');
  const [schemeAmount, setSchemeAmount] = useState('');
  const [schemeHelpline, setSchemeHelpline] = useState('1800-180-1551');

  // Real-time Firestore sync for all admin data
  useEffect(() => {
    // 1. Farmers / Users
    const unsubFarmers = onSnapshot(collection(db, 'farmers'), (snap) => {
      setFarmers(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => console.warn('Farmers sync error:', err));

    // 2. Posts
    const unsubPosts = onSnapshot(collection(db, 'posts'), (snap) => {
      setPosts(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => console.warn('Posts sync error:', err));

    // 3. Marketplace
    const unsubListings = onSnapshot(collection(db, 'marketplace'), (snap) => {
      setListings(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => console.warn('Listings sync error:', err));

    // 4. Govt Schemes
    const unsubSchemes = onSnapshot(collection(db, 'schemes'), (snap) => {
      setSchemes(snap.docs.map(d => ({ id: d.id, ...d.data() })));
    }, (err) => console.warn('Schemes sync error:', err));

    return () => {
      unsubFarmers();
      unsubPosts();
      unsubListings();
      unsubSchemes();
    };
  }, []);

  const currentRole = profile?.role || userRole;
  const isAdmin = currentRole === 'admin';
  const isModerator = currentRole === 'admin' || currentRole === 'moderator';

  if (!isModerator) {
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '40px', textAlign: 'center' }}>
        <Lock size={48} style={{ color: '#ef4444', marginBottom: '16px' }} />
        <h2 style={{ fontSize: '1.4rem', marginBottom: '8px' }}>Access Restricted</h2>
        <p style={{ color: 'var(--text-secondary)' }}>
          You must be an Admin or Moderator to access the Krushi Mitra Control Center.
        </p>
      </div>
    );
  }

  // User Role Handler
  const handleRoleChange = async (farmerId, newRole) => {
    try {
      await updateDoc(doc(db, 'farmers', farmerId), { role: newRole });
      alert(`Role updated to ${newRole}`);
    } catch (err) {
      console.error('Role update error:', err);
    }
  };

  // Moderation Handlers
  const handleDeletePost = async (postId) => {
    if (!window.confirm('Delete this post from community feed?')) return;
    try {
      await deleteDoc(doc(db, 'posts', postId));
    } catch (err) {
      console.error('Post delete error:', err);
    }
  };

  const handleApprovePost = async (postId) => {
    try {
      await updateDoc(doc(db, 'posts', postId), { isFlagged: false });
    } catch (err) {
      console.error('Post approve error:', err);
    }
  };

  const handleDeleteListing = async (listingId) => {
    if (!window.confirm('Remove this marketplace listing?')) return;
    try {
      await deleteDoc(doc(db, 'marketplace', listingId));
    } catch (err) {
      console.error('Listing delete error:', err);
    }
  };

  // Schemes Handlers
  const handleAddScheme = async (e) => {
    e.preventDefault();
    if (!schemeName || !schemeDesc) return;
    try {
      await addDoc(collection(db, 'schemes'), {
        name: schemeName,
        description: schemeDesc,
        benefitAmount: schemeAmount || 'Financial Support',
        helplineNumber: schemeHelpline,
        createdAt: serverTimestamp()
      });
      setSchemeName('');
      setSchemeDesc('');
      setSchemeAmount('');
      setShowSchemeModal(false);
    } catch (err) {
      console.error('Scheme add error:', err);
    }
  };

  const handleDeleteScheme = async (schemeId) => {
    if (!window.confirm('Delete this scheme content?')) return;
    try {
      await deleteDoc(doc(db, 'schemes', schemeId));
    } catch (err) {
      console.error('Scheme delete error:', err);
    }
  };

  const flaggedPosts = posts.filter(p => p.isFlagged);
  const flaggedListings = listings.filter(l => l.isFlagged);

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Shield style={{ color: 'var(--primary-emerald)' }} />
            Krushi Mitra Governance & Admin Console
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
            Logged in as: <strong style={{ color: 'var(--primary-emerald)' }}>{profile?.name || 'Administrator'} ({currentRole.toUpperCase()})</strong>
          </p>
        </div>
        <div style={{ display: 'flex', gap: '8px' }}>
          <span className="badge badge-emerald">Role: {currentRole.toUpperCase()}</span>
          <span className="badge badge-cyan">Server Security Enforced</span>
        </div>
      </div>

      {/* Admin Nav Tabs */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', borderBottom: '1px solid var(--border-outline)', paddingBottom: '8px' }}>
        <button onClick={() => setActiveTab('overview')} className={activeTab === 'overview' ? "btn-primary" : "btn-secondary"}>
          <BarChart3 size={16} /> Overview Stats
        </button>
        <button onClick={() => setActiveTab('users')} className={activeTab === 'users' ? "btn-primary" : "btn-secondary"}>
          <Users size={16} /> Farmers & Roles ({farmers.length})
        </button>
        <button onClick={() => setActiveTab('moderation')} className={activeTab === 'moderation' ? "btn-primary" : "btn-secondary"}>
          <ShieldAlert size={16} /> Moderation ({flaggedPosts.length + flaggedListings.length})
        </button>
        <button onClick={() => setActiveTab('schemes')} className={activeTab === 'schemes' ? "btn-primary" : "btn-secondary"}>
          <Landmark size={16} /> Govt Schemes CMS
        </button>
      </div>

      {/* TAB 1: OVERVIEW STATS */}
      {activeTab === 'overview' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}>
          <div className="glass-panel" style={{ padding: '20px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Total Registered Farmers</span>
            <h3 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--primary-emerald)' }}>{farmers.length}</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--primary-emerald)' }}>↑ Active user base</span>
          </div>

          <div className="glass-panel" style={{ padding: '20px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Active Marketplace Listings</span>
            <h3 style={{ fontSize: '2rem', marginTop: '8px', color: 'var(--secondary-cyan)' }}>{listings.length}</h3>
            <span style={{ fontSize: '0.75rem', color: 'var(--secondary-cyan)' }}>Direct farmer trade</span>
          </div>

          <div className="glass-panel" style={{ padding: '20px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Community Posts</span>
            <h3 style={{ fontSize: '2rem', marginTop: '8px', color: '#f59e0b' }}>{posts.length}</h3>
            <span style={{ fontSize: '0.75rem', color: '#f59e0b' }}>Shared discussions</span>
          </div>

          <div className="glass-panel" style={{ padding: '20px' }}>
            <span style={{ color: 'var(--text-secondary)', fontSize: '0.8rem' }}>Flagged Content Queue</span>
            <h3 style={{ fontSize: '2rem', marginTop: '8px', color: '#ef4444' }}>{flaggedPosts.length + flaggedListings.length}</h3>
            <span style={{ fontSize: '0.75rem', color: '#ef4444' }}>Requires review</span>
          </div>
        </div>
      )}

      {/* TAB 2: USER MANAGEMENT */}
      {activeTab === 'users' && (
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>👥 Farmer Directory & Role Management</h3>
            <input 
              type="text" 
              placeholder="Search farmer name..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input"
              style={{ maxWidth: '250px', padding: '6px 12px' }}
            />
          </div>

          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.86rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-outline)', color: 'var(--text-secondary)' }}>
                <th style={{ padding: '10px' }}>Name</th>
                <th style={{ padding: '10px' }}>State/District</th>
                <th style={{ padding: '10px' }}>Land Size</th>
                <th style={{ padding: '10px' }}>Current Role</th>
                <th style={{ padding: '10px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {farmers.filter(f => (f.name || '').toLowerCase().includes(searchQuery.toLowerCase())).map(f => (
                <tr key={f.id} style={{ borderBottom: '1px solid var(--glass-border)' }}>
                  <td style={{ padding: '10px', fontWeight: '600' }}>{f.name || 'Anonymous Farmer'}</td>
                  <td style={{ padding: '10px' }}>{f.district || 'Nashik'}, {f.state || 'Maharashtra'}</td>
                  <td style={{ padding: '10px' }}>{f.landAcres || f.landSize || 2} Acres</td>
                  <td style={{ padding: '10px' }}>
                    <span className={`badge ${f.role === 'admin' ? 'badge-danger' : f.role === 'moderator' ? 'badge-amber' : 'badge-emerald'}`}>
                      {f.role || 'farmer'}
                    </span>
                  </td>
                  <td style={{ padding: '10px' }}>
                    {isAdmin && (
                      <select 
                        value={f.role || 'farmer'} 
                        onChange={(e) => handleRoleChange(f.id, e.target.value)}
                        className="form-input"
                        style={{ padding: '4px 8px', fontSize: '0.78rem' }}
                      >
                        <option value="farmer">Farmer</option>
                        <option value="moderator">Moderator</option>
                        <option value="admin">Admin</option>
                      </select>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* TAB 3: MODERATION QUEUE */}
      {activeTab === 'moderation' && (
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <h3>🛡️ Content Moderation Queue</h3>
          
          <div>
            <h4 style={{ marginBottom: '10px', color: '#f59e0b' }}>Flagged Posts ({flaggedPosts.length})</h4>
            {flaggedPosts.length === 0 ? (
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>No community posts reported.</p>
            ) : (
              flaggedPosts.map(p => (
                <div key={p.id} style={{ background: 'rgba(239,68,68,0.1)', border: '1px solid #ef4444', padding: '12px', borderRadius: '8px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <strong>{p.author}</strong>: {p.content}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button onClick={() => handleApprovePost(p.id)} className="btn-primary" style={{ padding: '4px 10px', fontSize: '0.78rem' }}>
                      <CheckCircle size={14} /> Approve
                    </button>
                    <button onClick={() => handleDeletePost(p.id)} className="btn-secondary" style={{ padding: '4px 10px', fontSize: '0.78rem', color: '#ef4444' }}>
                      <Trash2 size={14} /> Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div>
            <h4 style={{ marginBottom: '10px', color: '#f59e0b' }}>Marketplace Moderation ({listings.length} Listings)</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {listings.slice(0, 5).map(l => (
                <div key={l.id} style={{ background: 'var(--glass-bg)', padding: '10px 14px', borderRadius: '6px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '0.84rem' }}>
                  <span>📦 <strong>{l.commodity}</strong> ({l.farmerName || 'Seller'}) — ₹{l.pricePerUnit}</span>
                  <button onClick={() => handleDeleteListing(l.id)} className="btn-secondary" style={{ padding: '4px 8px', fontSize: '0.74rem', color: '#ef4444' }}>
                    <Trash2 size={12} /> Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: GOVT SCHEMES CMS */}
      {activeTab === 'schemes' && (
        <div className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3>🏛️ Government Schemes CMS</h3>
            <button onClick={() => setShowSchemeModal(true)} className="btn-primary">
              + Add New Scheme
            </button>
          </div>

          {showSchemeModal && (
            <form onSubmit={handleAddScheme} style={{ background: 'var(--bg-surface)', padding: '16px', borderRadius: '8px', border: '1px solid var(--primary-emerald)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <h4>Add New Govt Scheme</h4>
              <input type="text" placeholder="Scheme Name (e.g. PM-Kisan)" value={schemeName} onChange={(e) => setSchemeName(e.target.value)} className="form-input" required />
              <textarea placeholder="Description & Eligibility..." value={schemeDesc} onChange={(e) => setSchemeDesc(e.target.value)} className="form-input" rows="3" required />
              <input type="text" placeholder="Benefit Amount (e.g. ₹6,000 / year)" value={schemeAmount} onChange={(e) => setSchemeAmount(e.target.value)} className="form-input" />
              <button type="submit" className="btn-primary">Publish Scheme</button>
            </form>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {schemes.map(s => (
              <div key={s.id} style={{ background: 'var(--glass-bg)', padding: '12px 16px', borderRadius: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <h4 style={{ fontSize: '0.95rem' }}>{s.name}</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>{s.description}</p>
                </div>
                <button onClick={() => handleDeleteScheme(s.id)} className="btn-secondary" style={{ color: '#ef4444', padding: '4px 8px' }}>
                  <Trash2 size={14} />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
