# Crypto News Tracker

A web app that provides live cryptocurrency prices, market trends, and crypto-related news.  
- **Frontend**: React.js  
- **Backend**: Node.js with Express.js  
- **APIs**: CoinGecko API for crypto prices, CryptoNews API for news  

## Features
- Live cryptocurrency prices and trends.
- Search and watchlist functionality.
- Crypto-related news feed.

## Completed Tasks
- ✅ Basic project setup and dependency installation
- ✅ API integration with CoinGecko
- ✅ Live price tracking implementation
- ✅ Basic frontend layout and components
- ✅ News feed integration

## Example Outputs

### Price Tracking
```json
{
  "bitcoin": {
    "usd": 47283.24,
    "usd_24h_change": 2.34,
    "market_cap": 923847582934
  },
  "ethereum": {
    "usd": 2834.12,
    "usd_24h_change": 1.23,
    "market_cap": 341847582934
  }
}
```

### News Feed
```json
{
  "articles": [
    {
      "title": "Bitcoin Reaches New Monthly High",
      "description": "BTC surges past $47k marking a significant milestone...",
      "publishedAt": "2024-01-20T14:30:00Z",
      "source": "CryptoNews"
    }
  ]
}
```
