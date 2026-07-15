/* ===========================
   Deriv API Configuration
   =========================== */

// IMPORTANT: Add your Deriv API credentials here
// Never commit this file with real credentials to public repos!

const DERIV_CONFIG = {
    // Get your API token from: https://app.deriv.com/account/api-token
    API_TOKEN: 'YOUR_DERIV_API_TOKEN_HERE',
    
    // Your Deriv Username/Email
    DERIV_USERNAME: 'YOUR_DERIV_USERNAME_HERE',
    
    // Affiliate settings
    AFFILIATE_URL: 'https://partner-tracking.deriv.com/click?a=13048&o=1&c=3&link_id=1',
    COMMISSION_RATE: 0.03, // 3%
    
    // Deriv API endpoint
    API_ENDPOINT: 'wss://ws.deriv.com/websockets/v3',
    
    // Local storage keys
    STORAGE_KEYS: {
        SIGNUPS: 'deriv_signups',
        TRADES: 'deriv_trades',
        EARNINGS: 'deriv_earnings',
        LAST_UPDATE: 'deriv_last_update'
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DERIV_CONFIG;
}