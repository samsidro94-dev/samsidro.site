/* ===========================
   Deriv Integration Module
   =========================== */

class DerivManager {
    constructor() {
        this.affiliateUrl = 'https://partner-tracking.deriv.com/click?a=13048&o=1&c=3&link_id=1';
        this.commissionRate = 0.03; // 3%
        this.signups = this.loadFromStorage('deriv_signups', []);
        this.trades = this.loadFromStorage('deriv_trades', []);
        this.earnings = this.loadFromStorage('deriv_earnings', 0);
    }

    // Storage Management
    loadFromStorage(key, defaultValue) {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : defaultValue;
        } catch (e) {
            console.error('Error loading from storage:', e);
            return defaultValue;
        }
    }

    saveToStorage(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.error('Error saving to storage:', e);
        }
    }

    // Signup Management
    addSignup(userData) {
        const signup = {
            id: Date.now(),
            email: userData.email || 'Unknown',
            name: userData.name || 'Unknown',
            signupDate: new Date().toISOString(),
            status: 'active',
            totalTrades: 0,
            totalVolume: 0,
            earnings: 0
        };

        this.signups.push(signup);
        this.saveToStorage('deriv_signups', this.signups);
        return signup;
    }

    // Trade Tracking
    addTrade(tradeData) {
        const trade = {
            id: Date.now(),
            signupId: tradeData.signupId,
            tradeType: tradeData.type || 'Unknown',
            amount: parseFloat(tradeData.amount) || 0,
            profit: parseFloat(tradeData.profit) || 0,
            timestamp: new Date().toISOString(),
            status: 'closed'
        };

        // Calculate commission (3% of trade amount)
        const commission = trade.amount * this.commissionRate;
        trade.commission = commission;

        this.trades.push(trade);
        this.saveToStorage('deriv_trades', this.trades);

        // Update earnings
        this.updateEarnings(commission);

        // Update signup stats
        this.updateSignupStats(tradeData.signupId, trade.amount, commission);

        return trade;
    }

    // Update Earnings
    updateEarnings(amount) {
        this.earnings += amount;
        this.saveToStorage('deriv_earnings', this.earnings);
    }

    // Update Signup Statistics
    updateSignupStats(signupId, tradeAmount, commission) {
        const signup = this.signups.find(s => s.id === signupId);
        if (signup) {
            signup.totalTrades += 1;
            signup.totalVolume += tradeAmount;
            signup.earnings += commission;
            this.saveToStorage('deriv_signups', this.signups);
        }
    }

    // Get Dashboard Stats
    getDashboardStats() {
        const totalSignups = this.signups.length;
        const totalTrades = this.trades.length;
        const totalVolume = this.trades.reduce((sum, trade) => sum + trade.amount, 0);
        const totalEarnings = this.earnings;
        const averageTradeAmount = totalTrades > 0 ? totalVolume / totalTrades : 0;

        return {
            totalSignups,
            totalTrades,
            totalVolume,
            totalEarnings,
            averageTradeAmount,
            commissionRate: this.commissionRate * 100,
            lastUpdated: new Date().toISOString()
        };
    }

    // Get Recent Activity
    getRecentActivity(limit = 10) {
        return {
            recentSignups: this.signups.slice(-limit).reverse(),
            recentTrades: this.trades.slice(-limit).reverse()
        };
    }

    // Get Affiliate URL
    getAffiliateUrl() {
        return this.affiliateUrl;
    }

    // Clear All Data (for testing)
    clearAllData() {
        this.signups = [];
        this.trades = [];
        this.earnings = 0;
        localStorage.removeItem('deriv_signups');
        localStorage.removeItem('deriv_trades');
        localStorage.removeItem('deriv_earnings');
    }

    // Export Data
    exportData() {
        return {
            signups: this.signups,
            trades: this.trades,
            earnings: this.earnings,
            stats: this.getDashboardStats(),
            exportDate: new Date().toISOString()
        };
    }
}

// Initialize Deriv Manager
const derivManager = new DerivManager();