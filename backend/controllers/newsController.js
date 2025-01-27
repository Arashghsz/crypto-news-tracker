const axios = require('axios');

const getNews = async (req, res) => {
    try {
        console.log('Fetching news...');
        // Using CryptoCompare news API instead
        const response = await axios.get('https://min-api.cryptocompare.com/data/v2/news/?lang=EN&limit=10');
        console.log('News data received');
        const formattedNews = response.data.Data.map(news => ({
            id: news.id,
            title: news.title,
            url: news.url,
            published_at: news.published_on
        }));
        res.json(formattedNews);
    } catch (error) {
        console.error('News API Error:', error.message);
        res.status(500).json({ 
            error: 'Failed to fetch news',
            details: error.message 
        });
    }
};

module.exports = { getNews };
