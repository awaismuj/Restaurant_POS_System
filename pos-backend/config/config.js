require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 3000,
    databaseURI: process.env.MONGODB_URI || "mongodb://localhost:27017/pos-db",
    nodeEnv: process.env.NODE_ENV || "development",
    frontendUrl: process.env.FRONTEND_URL || "http://localhost:5173",
    accessTokenSecret: process.env.JWT_SECRET || "change_this_to_a_long_random_secret_key",
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    razorpaySecretKey: process.env.RAZORPAY_KEY_SECRET,
    razorpyWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET,
    defaultAdmin: {
        name: process.env.ADMIN_NAME || "System Admin",
        email: process.env.ADMIN_EMAIL || "devops.awais@gmail.com",
        phone: Number(process.env.ADMIN_PHONE || 9999999999),
        password: process.env.ADMIN_PASSWORD || "admin123",
        role: process.env.ADMIN_ROLE || "Admin"
    }
});

module.exports = config;
