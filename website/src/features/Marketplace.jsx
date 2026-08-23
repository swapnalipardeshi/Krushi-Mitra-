// 🌾 Krushi Mitra Pro — Direct-Sale Marketplace with Live Firestore Sync
import React, { useState, useEffect } from 'react';
import { generateListingDescription } from '../services/ai';
import { Search, Plus, Phone, MessageSquare, ShoppingBag, PlusCircle, Sparkles, Star, CheckCircle, RefreshCw, ShieldAlert, Trash2 } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, onSnapshot, addDoc, doc, updateDoc, deleteDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';

export default function Marketplace({ profile, listings = [], setListings = () => {}, apiKey }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [showAddListing, setShowAddListing] = useState(false);
  const [liveListings, setLiveListings] = useState([]);
  
  // Form states
  const [commodity, setCommodity] = useState('Tomato');
  const [variety, setVariety] = useState('');
  const [quantity, setQuantity] = useState('');
  const [unit, setUnit] = useState('Quintal');
  const [pricePerUnit, setPricePerUnit] = useState('');
  const [quality, setQuality] = useState('A');
  const [location, setLocation] = useState(`${profile?.district || 'Nashik'}, ${profile?.state || 'Maharashtra'}`);
  const [description, setDescription] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('9876543210');
  const [isOrganic, setIsOrganic] = useState(true);
  const [isNegotiable, setIsNegotiable] = useState(true);
  const [deliveryAvailable, setDeliveryAvailable] = useState(true);
  const [writingAI, setWritingAI] = useState(false);

  const lang = profile?.language || 'hi';

  const formatText = (textHi, textEn) => {
    return lang === 'hi' ? textHi : textEn;
  };

  // Real-time Firestore sync
  useEffect(() => {
    try {
      const q = query(collection(db, 'marketplace'), orderBy('dateListed', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        const items = snapshot.docs.map(docSnap => {
          const d = docSnap.data();
          return {
            id: docSnap.id,
            farmerName: d.farmerName || d.sellerName || 'Farmer Mitra',
            commodity: d.commodity || 'Crop',
            variety: d.variety || 'Local',
            quantity: d.quantity || 1,
            unit: d.unit || 'Quintal',
            pricePerUnit: d.pricePerUnit || d.price || 0,
            quality: d.quality || 'A',
            location: d.location || 'India',
            description: d.description || '',
            imageUrl: d.imageUrl || "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=500&auto=format&fit=crop",
            phoneNumber: d.phoneNumber || d.phone || '',
            isOrganic: d.isOrganic ?? true,
            isNegotiable: d.isNegotiable ?? true,
            deliveryAvailable: d.deliveryAvailable ?? true,
            isVerified: d.isVerified ?? true,
            isSold: d.isSold ?? false,
            isFlagged: d.isFlagged ?? false,
            dateListed: d.dateListed?.toDate ? d.dateListed.toDate().toLocaleDateString() : 'Recently'
          };
        });
        setLiveListings(items);
        if (setListings) setListings(items);
      }, (err) => {
        console.warn('Firestore Marketplace subscription error:', err);
      });
      return () => unsubscribe();
    } catch (e) {
      console.warn('Firebase Marketplace error:', e);
    }
  }, []);

  const displayListings = liveListings.length > 0 ? liveListings : listings;

  const handleAddListing = async (e) => {
    e.preventDefault();
    if (!quantity || !pricePerUnit) return;

    const stockImages = {
      Wheat: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?q=80&w=500&auto=format&fit=crop",
      Onion: "https://images.unsplash.com/photo-1508747703725-719ae2c226e1?q=80&w=500&auto=format&fit=crop",
      Tomato: "https://images.unsplash.com/photo-1595855759920-86582396756a?q=80&w=500&auto=format&fit=crop",
      Rice: "https://images.unsplash.com/photo-1586201375761-83865001e31c?q=80&w=500&auto=format&fit=crop",
      Potato: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?q=80&w=500&auto=format&fit=crop",
      Soyabean: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?q=80&w=500&auto=format&fit=crop",
      Cotton: "https://images.unsplash.com/photo-1594761053050-b112507d189f?q=80&w=500&auto=format&fit=crop",
    };

    const newListing = {
      farmerName: profile.name || 'Farmer Mitra',
      commodity,
      variety: variety || 'Local',
      quantity: parseFloat(quantity),
      unit,
      pricePerUnit: parseFloat(pricePerUnit),
      quality,
      location,
      description: description || `Fresh Grade-${quality} ${commodity} harvested in ${location}.`,
      imageUrl: stockImages[commodity] || "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?q=80&w=500&auto=format&fit=crop",
      phoneNumber,
      isOrganic,
      isNegotiable,
      deliveryAvailable,
      isVerified: true,
      isSold: false,
      isFlagged: false,
      dateListed: serverTimestamp()
    };

    try {
      await addDoc(collection(db, 'marketplace'), newListing);
    } catch (err) {
      console.error('Firestore listing add error:', err);
    }

    setVariety('');
    setQuantity('');
    setPricePerUnit('');
    setDescription('');
    setShowAddListing(false);
  };

  const handleAIWrite = async () => {
    if (!quantity || !pricePerUnit) return;
    setWritingAI(true);
    try {
      const details = {
        commodity,
        variety: variety || 'Local',
        quality,
        quantity,
        unit,
        pricePerUnit,
        location,
        isOrganic,
        isNegotiable
      };
      const desc = await generateListingDescription(details, lang, apiKey);
      setDescription(desc);
    } catch (e) {
      console.error(e);
      setDescription(`Fresh Grade-${quality} ${commodity} available for sale in ${location}. Contact for price.`);
    } finally {
      setWritingAI(false);
    }
  };

  const handleFlagListing = async (id) => {
    try {
      const docRef = doc(db, 'marketplace', id);
      await updateDoc(docRef, { isFlagged: true });
      alert("Listing reported for moderation review.");
    } catch (err) {
      console.error('Flag error:', err);
    }
  };

  const filteredListings = displayListings.filter(item => 
    (item.commodity || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.location || '').toLowerCase().includes(searchTerm.toLowerCase()) ||
    (item.variety || '').toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Header Banner */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
        <div>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <ShoppingBag style={{ color: 'var(--primary-emerald)' }} />
            {formatText("फसल मंडी — सीधे खरीदार से जुड़ें", "Farmer Direct Crop Marketplace")}
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            {formatText(
              "बिचौलियों को हटाकर अपनी उपज का सर्वोत्तम मूल्य प्राप्त करें। सत्यापित व्यापारियों से सीधा संपर्क करें।",
              "Sell your produce directly to verified bulk buyers and mandis at zero commission."
            )}
          </p>
        </div>
        <button onClick={() => setShowAddListing(true)} className="btn-primary">
          <PlusCircle size={18} /> {formatText("अपनी उपज बेचें", "List Crop For Sale")}
        </button>
      </div>

      {/* Search Bar */}
      <div style={{ display: 'flex', gap: '12px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-secondary)' }} />
          <input 
            type="text"
            placeholder={formatText("फसल, किस्म या स्थान खोजें...", "Search crop, variety, or city (e.g. Wheat, Nashik)...")}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-input"
            style={{ paddingLeft: '44px' }}
          />
        </div>
      </div>

      {/* Form Modal */}
      {showAddListing && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(0,0,0,0.7)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
          <div className="glass-panel animate-fade-in" style={{ background: 'var(--bg-surface)', width: '100%', maxWidth: '600px', padding: '24px', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
            <button onClick={() => setShowAddListing(false)} className="btn-secondary" style={{ position: 'absolute', right: '16px', top: '16px', padding: '2px 8px', fontSize: '0.8rem' }}>✕</button>
            <h3 style={{ marginBottom: '16px', fontSize: '1.2rem' }}>🌽 {formatText("नई फसल की बिक्री सूची दर्ज करें", "Create Crop Listing")}</h3>

            <form onSubmit={handleAddListing} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
              <div>
                <label className="form-label">{formatText("फसल का नाम", "Crop Name")}</label>
                <select value={commodity} onChange={(e) => setCommodity(e.target.value)} className="form-input">
                  <option value="Tomato">Tomato (टमाटर)</option>
                  <option value="Wheat">Wheat (गेहूँ)</option>
                  <option value="Onion">Onion (प्याज)</option>
                  <option value="Rice">Rice (चावल)</option>
                  <option value="Cotton">Cotton (कपास)</option>
                  <option value="Soyabean">Soyabean (सोयाबीन)</option>
                  <option value="Potato">Potato (आलू)</option>
                </select>
              </div>

              <div>
                <label className="form-label">{formatText("किस्म / वैरायटी", "Variety")}</label>
                <input type="text" placeholder="e.g. Lokwan / Sharbati" value={variety} onChange={(e) => setVariety(e.target.value)} className="form-input" />
              </div>

              <div>
                <label className="form-label">{formatText("मात्रा (Quantity)", "Quantity")}</label>
                <input type="number" placeholder="50" value={quantity} onChange={(e) => setQuantity(e.target.value)} className="form-input" required />
              </div>

              <div>
                <label className="form-label">{formatText("इकाई (Unit)", "Unit")}</label>
                <select value={unit} onChange={(e) => setUnit(e.target.value)} className="form-input">
                  <option value="Quintal">Quintal (कुंतल)</option>
                  <option value="Ton">Ton (टन)</option>
                  <option value="Kg">Kg (किग्रा)</option>
                </select>
              </div>

              <div>
                <label className="form-label">{formatText("प्रति इकाई मूल्य (₹)", "Price Per Unit (₹)")}</label>
                <input type="number" placeholder="2500" value={pricePerUnit} onChange={(e) => setPricePerUnit(e.target.value)} className="form-input" required />
              </div>

              <div>
                <label className="form-label">{formatText("गुणवत्ता ग्रेड", "Quality Grade")}</label>
                <select value={quality} onChange={(e) => setQuality(e.target.value)} className="form-input">
                  <option value="A+">Grade A+ (Premium Export)</option>
                  <option value="A">Grade A (High Quality)</option>
                  <option value="B">Grade B (Standard)</option>
                </select>
              </div>

              <div style={{ gridColumn: 'span 2' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <label className="form-label">{formatText("विवरण (Description)", "Description")}</label>
                  <button type="button" onClick={handleAIWrite} disabled={writingAI} className="btn-secondary" style={{ fontSize: '0.75rem', padding: '4px 10px', color: 'var(--primary-emerald)', gap: '4px' }}>
                    <Sparkles size={12} /> {writingAI ? "AI Writing..." : "AI Description"}
                  </button>
                </div>
                <textarea rows="3" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe crop freshness, moisture, harvesting date..." className="form-input" />
              </div>

              <div style={{ gridColumn: 'span 2', display: 'flex', gap: '16px' }}>
                <label style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={isOrganic} onChange={(e) => setIsOrganic(e.target.checked)} /> Organic Farming
                </label>
                <label style={{ fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '6px', cursor: 'pointer' }}>
                  <input type="checkbox" checked={isNegotiable} onChange={(e) => setIsNegotiable(e.target.checked)} /> Price Negotiable
                </label>
              </div>

              <button type="submit" className="btn-primary" style={{ gridColumn: 'span 2', justifyContent: 'center', marginTop: '10px' }}>
                {formatText("बिक्री हेतु पोस्ट करें", "Publish Listing")}
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Grid of items */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredListings.map((item) => (
          <div key={item.id} className="glass-panel" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ position: 'relative', height: '160px' }}>
              <img src={item.imageUrl} alt={item.commodity} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <span className="badge badge-emerald" style={{ position: 'absolute', top: '12px', left: '12px' }}>
                Grade {item.quality}
              </span>
              <span className="badge badge-amber" style={{ position: 'absolute', top: '12px', right: '12px' }}>
                ₹{item.pricePerUnit} / {item.unit}
              </span>
            </div>

            <div style={{ padding: '16px', display: 'flex', flexDirection: 'column', gap: '10px', flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: '700' }}>{item.commodity} ({item.variety})</h3>
                  <span style={{ fontSize: '0.78rem', color: 'var(--text-secondary)' }}>📍 {item.location}</span>
                </div>
                {item.isVerified && (
                  <span title="Verified Farmer" style={{ color: 'var(--primary-emerald)' }}>
                    <CheckCircle size={18} />
                  </span>
                )}
              </div>

              <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: '1.4', flex: 1 }}>
                {item.description}
              </p>

              <div style={{ display: 'flex', gap: '8px', fontSize: '0.75rem' }}>
                <span className="badge badge-cyan">Qty: {item.quantity} {item.unit}</span>
                {item.isOrganic && <span className="badge badge-emerald">Organic</span>}
                {item.isNegotiable && <span className="badge badge-amber">Negotiable</span>}
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-outline)', paddingTop: '10px', marginTop: '6px' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: '600' }}>👤 {item.farmerName}</span>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <button onClick={() => handleFlagListing(item.id)} title="Report Listing" style={{ background: 'transparent', border: 'none', color: 'var(--text-disabled)', cursor: 'pointer' }}>
                    <ShieldAlert size={16} />
                  </button>
                  <a href={`tel:${item.phoneNumber}`} className="btn-primary" style={{ padding: '6px 12px', fontSize: '0.78rem' }}>
                    <Phone size={14} /> Call Seller
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
