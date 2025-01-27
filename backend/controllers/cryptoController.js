const axios = require('axios');

const getCryptoPrices = async (req, res) => {
    try {
        console.log('Fetching crypto prices...');
        const response = await axios.get('https://min-api.cryptocompare.com/data/top/mktcapfull', {
            params: {
                limit: 10,
                tsym: 'USD'
            }
        });

        console.log('Raw response:', response.data);

        if (!response.data || !response.data.Data) {
            throw new Error('Invalid API response structure');
        }

        const formattedData = response.data.Data.map(item => ({
            id: item.CoinInfo.Id,
            name: item.CoinInfo.Name,
            current_price: item.RAW?.USD?.PRICE || 0,
            price_change_percentage_24h: item.RAW?.USD?.CHANGEPCT24HOUR || 0
        }));

        console.log('Formatted data:', formattedData);
        res.json(formattedData);
    } catch (error) {
        console.error('Full error:', error);
        res.status(500).json({ 
            error: 'Failed to fetch price data',
            details: error.message
        });
    }
};

module.exports = { getCryptoPrices };
