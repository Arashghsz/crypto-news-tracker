import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [cryptoData, setCryptoData] = useState([]);
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        console.log('Fetching data from backend...');
        const [pricesRes, newsRes] = await Promise.all([
          fetch('http://localhost:5000/api/prices'),
          fetch('http://localhost:5000/api/news')
        ]);

        const pricesData = await pricesRes.json();
        const newsData = await newsRes.json();

        if (pricesData.error) throw new Error(pricesData.error);
        if (newsData.error) throw new Error(newsData.error);

        console.log('Data received:', { prices: pricesData, news: newsData });
        setCryptoData(pricesData);
        setNewsData(newsData);
      } catch (err) {
        console.error('Frontend Error:', err);
        setError(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div className="loading">Loading data...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="App">
      <h1>Cryptocurrency Dashboard</h1>
      
      <h2>Prices</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>24h Change (%)</th>
          </tr>
        </thead>
        <tbody>
          {cryptoData.map(coin => (
            <tr key={coin.id}>
              <td>{coin.name}</td>
              <td>${coin.current_price.toFixed(2)}</td>
              <td style={{ color: coin.price_change_percentage_24h > 0 ? 'green' : 'red' }}>
                {coin.price_change_percentage_24h.toFixed(2)}%
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h2>Latest News</h2>
      <div className="news-container">
        {newsData.map(news => (
          <div key={news.id} className="news-item">
            <a href={news.url} target="_blank" rel="noopener noreferrer">
              {news.title}
            </a>
            <span className="news-date">
              {new Date(news.published_at).toLocaleDateString()}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
