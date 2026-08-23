// 🌦️ Krushi Mitra Pro — Weather Forecast Updates & Historical Trends
import React, { useState, useEffect } from 'react';
import { CloudRain, Sun, Cloud, Thermometer, Wind, Droplets, ShieldCheck, AlertCircle, Sparkles, BarChart2, Calendar } from 'lucide-react';
import { fetchHistoricalWeather } from '../services/historicalWeather';

export default function WeatherForecast({ weather, profile }) {
  const [activeTab, setActiveTab] = useState('forecast');
  const [historicalData, setHistoricalData] = useState([]);
  const [loadingHistory, setLoadingHistory] = useState(true);

  const lang = profile?.language || 'hi';

  useEffect(() => {
    async function loadHistory() {
      const data = await fetchHistoricalWeather();
      setHistoricalData(data);
      setLoadingHistory(false);
    }
    loadHistory();
  }, []);

  if (!weather) {
    return (
      <div className="glass-panel animate-fade-in" style={{ padding: '40px', textAlign: 'center' }}>
        <p>Loading weather insights...</p>
      </div>
    );
  }

  const { temperature, feelsLike, condition, description, humidity, windSpeed, uvIndex, dailyForecasts, advisory } = weather;

  return (
    <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      
      {/* Current Conditions Panel */}
      <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <div style={{ fontSize: '4.5rem', lineHeight: '1' }}>
            {condition === 'Rain' ? '🌧️' : condition === 'Clouds' ? '⛅' : '☀️'}
          </div>
          <div>
            <h1 style={{ fontSize: '3rem', fontWeight: '700', lineHeight: '1' }}>{temperature}°C</h1>
            <p style={{ textTransform: 'capitalize', color: 'var(--text-secondary)', marginTop: '4px', fontSize: '0.95rem' }}>
              {description} (Feels like {feelsLike}°C)
            </p>
            <p style={{ fontSize: '0.85rem', color: 'var(--primary-emerald)', fontWeight: '500', marginTop: '2px' }}>
              📍 {profile?.district || 'Nashik'}, {profile?.state || 'Maharashtra'}
            </p>
          </div>
        </div>

        {/* Quick Weather Metrics Grid */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <div style={{ background: 'var(--glass-bg)', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Droplets style={{ color: 'var(--secondary-cyan)' }} size={24} />
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Humidity</span>
              <strong style={{ fontSize: '1rem' }}>{humidity}%</strong>
            </div>
          </div>

          <div style={{ background: 'var(--glass-bg)', padding: '12px 18px', borderRadius: '12px', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Wind style={{ color: 'var(--primary-emerald)' }} size={24} />
            <div>
              <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>Wind Speed</span>
              <strong style={{ fontSize: '1rem' }}>{windSpeed} km/h</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Weather Tabs */}
      <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--border-outline)', paddingBottom: '8px' }}>
        <button 
          onClick={() => setActiveTab('forecast')} 
          className={activeTab === 'forecast' ? "btn-primary" : "btn-secondary"}
        >
          <CloudRain size={16} /> 5-Day Live Forecast
        </button>
        <button 
          onClick={() => setActiveTab('historical')} 
          className={activeTab === 'historical' ? "btn-primary" : "btn-secondary"}
        >
          <BarChart2 size={16} /> 12-Month Historical Trends (Open-Meteo)
        </button>
      </div>

      {/* Advisory Banner */}
      {advisory && (
        <div style={{ background: 'rgba(16, 185, 129, 0.08)', border: '1px solid var(--primary-emerald)', padding: '16px', borderRadius: '12px', display: 'flex', gap: '12px', alignItems: 'center' }}>
          <Sparkles style={{ color: 'var(--primary-emerald)', flexShrink: 0 }} size={24} />
          <div>
            <strong style={{ color: 'var(--primary-emerald)', fontSize: '0.9rem', display: 'block', marginBottom: '2px' }}>Automated Farming Advisory:</strong>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-primary)', lineHeight: '1.4' }}>{advisory}</p>
          </div>
        </div>
      )}

      {/* TAB 1: 5-DAY FORECAST */}
      {activeTab === 'forecast' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '14px' }}>
          {(dailyForecasts || []).map((day, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: '16px', textAlign: 'center', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: '600' }}>{day.dayName}</span>
              <div style={{ fontSize: '2rem', margin: '4px 0' }}>
                {day.condition === 'Rain' ? '🌧️' : day.condition === 'Clouds' ? '⛅' : '☀️'}
              </div>
              <strong style={{ fontSize: '1.1rem' }}>{day.temp}°C</strong>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{day.condition}</span>
            </div>
          ))}
        </div>
      )}

      {/* TAB 2: HISTORICAL WEATHER TRENDS */}
      {activeTab === 'historical' && (
        <div className="glass-panel" style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '8px' }}>
              <BarChart2 style={{ color: 'var(--primary-emerald)' }} />
              Open-Meteo Historical Climate & Rainfall Trends
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
              12-Month rainfall and temperature averages for {profile?.district || 'Nashik'} to guide crop planning & sowing dates.
            </p>
          </div>

          {loadingHistory ? (
            <p>Fetching Open-Meteo historical archive data...</p>
          ) : (
            <>
              {/* Year over Year Rainfall Comparison Chart */}
              <div>
                <h4 style={{ fontSize: '0.95rem', marginBottom: '12px', color: 'var(--secondary-cyan)' }}>
                  🌧️ Monthly Rainfall (mm) — 2024 vs 2023 Comparison
                </h4>
                
                <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-end', height: '180px', borderBottom: '1px solid var(--border-outline)', paddingBottom: '8px' }}>
                  {historicalData.map((m, idx) => {
                    const maxRain = 350;
                    const height24 = Math.min(150, (m.totalRainfall / maxRain) * 150);
                    const height23 = Math.min(150, (m.lastYearRainfall / maxRain) * 150);
                    return (
                      <div key={idx} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', height: '100%', justifyContent: 'flex-end' }}>
                        <div style={{ display: 'flex', gap: '3px', alignItems: 'flex-end', width: '100%', justifyContent: 'center' }}>
                          <div title={`2024: ${m.totalRainfall}mm`} style={{ width: '45%', height: `${height24}px`, background: 'var(--primary-emerald)', borderRadius: '4px 4px 0 0', minHeight: '4px' }} />
                          <div title={`2023: ${m.lastYearRainfall}mm`} style={{ width: '45%', height: `${height23}px`, background: 'var(--secondary-cyan)', borderRadius: '4px 4px 0 0', minHeight: '4px' }} />
                        </div>
                        <span style={{ fontSize: '0.7rem', color: 'var(--text-secondary)', marginTop: '4px' }}>{m.month}</span>
                      </div>
                    );
                  })}
                </div>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', marginTop: '10px', fontSize: '0.78rem' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '12px', height: '12px', background: 'var(--primary-emerald)', borderRadius: '2px' }} /> 2024 Rainfall</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><div style={{ width: '12px', height: '12px', background: 'var(--secondary-cyan)', borderRadius: '2px' }} /> 2023 Rainfall</span>
                </div>
              </div>

              {/* Climate Insights */}
              <div style={{ background: 'var(--glass-bg)', padding: '16px', borderRadius: '10px', border: '1px solid var(--glass-border)' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--primary-emerald)', marginBottom: '6px' }}>💡 Crop Planning Intelligence:</h4>
                <ul style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', paddingLeft: '20px', lineHeight: '1.6' }}>
                  <li>July & August remain peak rainfall months (average 280-310mm). Ensure adequate field drainage before Kharif sowing.</li>
                  <li>November to March exhibits optimal cool temperatures (24°C-27°C) ideal for Rabi Wheat and Onion bulb development.</li>
                  <li>May shows maximum heat stress (37.1°C). Pre-irrigation required prior to early sowing.</li>
                </ul>
              </div>
            </>
          )}
        </div>
      )}

    </div>
  );
}
