// 👥 Krushi Mitra Pro — Community Forum Feed with Live Firestore Sync
import React, { useState, useEffect } from 'react';
import { MessageSquare, ThumbsUp, Plus, Search, Tag, User, Send, ShieldAlert } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, onSnapshot, addDoc, doc, updateDoc, increment, serverTimestamp, query, orderBy } from 'firebase/firestore';

import { moderateContent } from '../services/ai';

export default function Community({ profile, communityPosts = [], setCommunityPosts = () => {} }) {
  const [activeTab, setActiveTab] = useState('All');
  const [showAddPost, setShowAddPost] = useState(false);
  const [newPostText, setNewPostText] = useState('');
  const [newPostTag, setNewPostTag] = useState('General');
  const [newPostImage, setNewPostImage] = useState('');
  const [activeCommentId, setActiveCommentId] = useState(null);
  const [newCommentText, setNewCommentText] = useState('');
  const [livePosts, setLivePosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [moderationWarning, setModerationWarning] = useState('');

  const lang = profile?.language || 'hi';

  const formatText = (textHi, textEn) => {
    return lang === 'hi' ? textHi : textEn;
  };

  // Real-time Firestore sync
  useEffect(() => {
    try {
      const q = query(collection(db, 'posts'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const postsData = snapshot.docs.map(docSnap => {
          const data = docSnap.data();
          return {
            id: docSnap.id,
            author: data.authorName || data.author || 'Farmer Mitra',
            location: data.authorLocation || data.location || 'India',
            content: data.content || '',
            tag: data.category || data.tag || 'General',
            imageUrl: data.imageUrl || null,
            likes: data.likes || 0,
            isFlagged: data.isFlagged || false,
            comments: data.comments || [],
            date: data.createdAt?.toDate ? data.createdAt.toDate().toLocaleDateString(lang === 'hi' ? 'hi-IN' : 'en-IN', { day: 'numeric', month: 'short' }) : 'Recently'
          };
        });
        setLivePosts(postsData);
        if (setCommunityPosts) setCommunityPosts(postsData);
        setLoading(false);
      }, (err) => {
        console.warn('Firestore subscription error, using local state fallback:', err);
        setLoading(false);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firebase init error:', e);
      setLoading(false);
    }
  }, [lang]);

  const displayPosts = livePosts.length > 0 ? livePosts : communityPosts;

  const handleAddPost = async (e) => {
    e.preventDefault();
    if (!newPostText.trim()) return;

    setModerationWarning('');
    
    // AI Content Moderation & Auto-Categorization
    const modResult = await moderateContent(newPostText.trim());
    
    if (modResult.isFlagged) {
      setModerationWarning(`⚠️ Post Flagged by AI Moderation: ${modResult.reason}`);
      return;
    }

    const finalTag = newPostTag === 'General' ? (modResult.category || 'General') : newPostTag;

    const postPayload = {
      authorName: profile.name || 'Farmer Mitra',
      authorLocation: `${profile.district || 'Nashik'}, ${profile.state || 'Maharashtra'}`,
      content: newPostText.trim(),
      category: finalTag,
      imageUrl: newPostImage || null,
      likes: 0,
      comments: [],
      isFlagged: false,
      createdAt: serverTimestamp()
    };

    try {
      await addDoc(collection(db, 'posts'), postPayload);
    } catch (err) {
      console.error('Firestore post create error:', err);
      // Fallback local
      const localPost = {
        id: `post_${Date.now()}`,
        author: postPayload.authorName,
        location: postPayload.authorLocation,
        content: postPayload.content,
        tag: postPayload.category,
        imageUrl: postPayload.imageUrl,
        likes: 0,
        comments: [],
        date: 'Just now'
      };
      setCommunityPosts([localPost, ...displayPosts]);
    }

    setNewPostText('');
    setNewPostImage('');
    setNewPostTag('General');
    setShowAddPost(false);
  };

  const handleLike = async (id) => {
    try {
      const postRef = doc(db, 'posts', id);
      await updateDoc(postRef, { likes: increment(1) });
    } catch (err) {
      console.error('Firestore like error:', err);
    }
  };

  const handleReportPost = async (id) => {
    try {
      const postRef = doc(db, 'posts', id);
      await updateDoc(postRef, { isFlagged: true });
      alert(formatText("पोस्ट की रिपोर्ट कर दी गई है। मॉडरेटर इसकी जांच करेंगे।", "Post flagged for moderator review."));
    } catch (err) {
      console.error('Report error:', err);
    }
  };

  const handleAddComment = async (postId) => {
    if (!newCommentText.trim()) return;
    const commentObj = {
      id: Date.now().toString(),
      author: profile.name || 'Farmer Mitra',
      content: newCommentText.trim(),
      date: 'Just now'
    };

    const targetPost = displayPosts.find(p => p.id === postId);
    if (!targetPost) return;

    const updatedComments = [...(targetPost.comments || []), commentObj];

    try {
      const postRef = doc(db, 'posts', postId);
      await updateDoc(postRef, { comments: updatedComments });
    } catch (err) {
      console.error('Firestore comment error:', err);
    }
    setNewCommentText('');
  };

  const tabs = ['All', 'Pests', 'Weather', 'Market', 'General'];

  const filteredPosts = activeTab === 'All' 
    ? displayPosts 
    : displayPosts.filter(post => (post.tag || '').toLowerCase() === activeTab.toLowerCase());

  const getTagColor = (tag) => {
    const t = (tag || '').toLowerCase();
    if (t === 'pests' || t === 'disease') return 'badge-danger';
    if (t === 'weather') return 'badge-cyan';
    if (t === 'market') return 'badge-amber';
    return 'badge-emerald';
  };

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header Info */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <MessageSquare style={{ color: 'var(--primary-emerald)' }} />
            {formatText("किसान मंच — चर्चा चौपाल", "Farmer Community Feed")}
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {formatText(
              "अन्य किसानों के साथ जुड़ें, फसल सलाह साझा करें, सवाल पूछें और कृषि अनुभवों पर चर्चा करें।",
              "Connect with other growers in your district, share crop protection advice, and ask pest concerns."
            )}
          </p>
        </div>
        <button onClick={() => setShowAddPost(true)} className="btn-primary">
          <Plus size={18} /> {formatText("नया पोस्ट लिखें", "Create Post")}
        </button>
      </div>

      {/* Tabs Row */}
      <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '4px' }}>
        {tabs.map((tab, idx) => (
          <button 
            key={idx}
            onClick={() => setActiveTab(tab)}
            className={activeTab === tab ? "btn-primary" : "btn-secondary"}
            style={{ 
              fontSize: '0.8rem', 
              padding: '8px 16px', 
              borderRadius: '20px',
              background: activeTab === tab ? undefined : 'var(--glass-bg)',
              borderColor: activeTab === tab ? undefined : 'var(--glass-border)'
            }}
          >
            {tab === 'All' ? formatText("सभी पोस्ट", "All Posts") : tab}
          </button>
        ))}
      </div>

      {/* Posts viewport */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        
        {/* Modal */}
        {showAddPost && (
          <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
            <div className="glass-panel animate-fade-in" style={{ background: 'var(--bg-surface)', width: '100%', maxWidth: '500px', padding: '24px', position: 'relative' }}>
              <button onClick={() => setShowAddPost(false)} className="btn-secondary" style={{ position: 'absolute', right: '16px', top: '16px', padding: '2px 8px', fontSize: '0.8rem' }}>✕</button>
              <h3 style={{ marginBottom: '16px', fontSize: '1.1rem' }}>✍️ {formatText("चर्चा पोस्ट साझा करें", "Share Post to Community")}</h3>
              
              {moderationWarning && (
                <div style={{ background: 'rgba(239, 68, 68, 0.15)', border: '1px solid rgba(239, 68, 68, 0.3)', borderRadius: '8px', padding: '10px 14px', color: '#f87171', fontSize: '0.82rem', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <ShieldAlert size={16} />
                  <span>{moderationWarning}</span>
                </div>
              )}
              
              <form onSubmit={handleAddPost} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Tag/Category</label>
                  <select value={newPostTag} onChange={(e) => setNewPostTag(e.target.value)} className="form-input" style={{ padding: '8px 10px' }}>
                    <option value="General">General</option>
                    <option value="Pests">Pests / Disease</option>
                    <option value="Weather">Weather</option>
                    <option value="Market">Market Prices</option>
                  </select>
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>{formatText("संदेश विवरण", "Message Content")}</label>
                  <textarea 
                    rows="4"
                    value={newPostText}
                    onChange={(e) => setNewPostText(e.target.value)}
                    placeholder={formatText("अपनी समस्या या विचार लिखें...", "What farming concern or success story do you want to share?")}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '0.78rem', color: 'var(--text-secondary)', marginBottom: '4px' }}>Optional Image Link</label>
                  <input 
                    type="text"
                    placeholder="https://images.unsplash.com/..."
                    value={newPostImage}
                    onChange={(e) => setNewPostImage(e.target.value)}
                    className="form-input"
                  />
                </div>
                <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '6px' }}>
                  {formatText("पोस्ट प्रकाशित करें", "Publish Post")}
                </button>
              </form>
            </div>
          </div>
        )}

        {filteredPosts.length === 0 ? (
          <div className="glass-panel" style={{ padding: '40px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            No posts found in this category yet. Be the first to start a discussion!
          </div>
        ) : (
          filteredPosts.map((post) => (
            <div key={post.id} className="glass-panel" style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--bg-surface-variant)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary-emerald)' }}>
                    <User size={16} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '0.9rem', fontWeight: '600' }}>{post.author}</h4>
                    <span style={{ fontSize: '0.72rem', color: 'var(--text-secondary)' }}>📍 {post.location} • {post.date}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                  <span className={`badge ${getTagColor(post.tag)}`}>
                    <Tag size={12} /> {post.tag}
                  </span>
                  <button 
                    onClick={() => handleReportPost(post.id)}
                    title="Report / Flag Post"
                    style={{ background: 'transparent', border: 'none', color: post.isFlagged ? '#ef4444' : 'var(--text-disabled)', cursor: 'pointer' }}
                  >
                    <ShieldAlert size={16} />
                  </button>
                </div>
              </div>

              <div>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.6', color: 'var(--text-primary)', whiteSpace: 'pre-wrap' }}>
                  {post.content}
                </p>
                {post.imageUrl && (
                  <img 
                    src={post.imageUrl} 
                    alt="Post Attach" 
                    style={{ width: '100%', maxHeight: '300px', objectFit: 'cover', borderRadius: '8px', marginTop: '12px' }} 
                  />
                )}
              </div>

              <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid var(--border-outline)', paddingTop: '12px' }}>
                <button 
                  onClick={() => handleLike(post.id)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', gap: '6px', alignItems: 'center', fontSize: '0.82rem' }}
                >
                  <ThumbsUp size={16} /> {post.likes} {formatText("पसंद", "Likes")}
                </button>
                <button 
                  onClick={() => setActiveCommentId(activeCommentId === post.id ? null : post.id)}
                  style={{ background: 'transparent', border: 'none', color: 'var(--text-secondary)', cursor: 'pointer', display: 'flex', gap: '6px', alignItems: 'center', fontSize: '0.82rem' }}
                >
                  <MessageSquare size={16} /> {post.comments?.length || 0} {formatText("टिप्पणी", "Comments")}
                </button>
              </div>

              {activeCommentId === post.id && (
                <div style={{ background: 'rgba(2, 6, 23, 0.2)', border: '1px solid var(--glass-border)', padding: '16px', borderRadius: '8px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '180px', overflowY: 'auto' }}>
                    {(post.comments || []).map((comm, cIdx) => (
                      <div key={comm.id || cIdx} style={{ fontSize: '0.82rem', background: 'rgba(255,255,255,0.01)', border: '1px solid var(--glass-border)', padding: '8px 12px', borderRadius: '6px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-secondary)', fontSize: '0.74rem', marginBottom: '2px' }}>
                          <span style={{ fontWeight: '600' }}>{comm.author}</span>
                          <span>{comm.date}</span>
                        </div>
                        <p>{comm.content}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <input 
                      type="text" 
                      placeholder={formatText("अपनी टिप्पणी लिखें...", "Write a comment...")}
                      value={newCommentText}
                      onChange={(e) => setNewCommentText(e.target.value)}
                      className="form-input"
                      style={{ padding: '8px 12px', fontSize: '0.82rem' }}
                    />
                    <button onClick={() => handleAddComment(post.id)} className="btn-primary" style={{ padding: '8px 14px' }}>
                      <Send size={14} />
                    </button>
                  </div>
                </div>
              )}

            </div>
          ))
        )}
      </div>
    </div>
  );
}
