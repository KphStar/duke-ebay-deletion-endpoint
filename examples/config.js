module.exports = {
    SANDBOX: {
      clientId: process.env.EBAY_SANDBOX_CLIENT_ID,
      clientSecret: process.env.EBAY_SANDBOX_CLIENT_SECRET,
      devId: process.env.EBAY_SANDBOX_DEV_ID,
      redirectUri: process.env.EBAY_SANDBOX_REDIRECT_URI,
      baseUrl: "api.sandbox.ebay.com"
    },
    PRODUCTION: {
      clientId: process.env.EBAY_PRODUCTION_CLIENT_ID,
      clientSecret: process.env.EBAY_PRODUCTION_CLIENT_SECRET,
      devId: process.env.EBAY_PRODUCTION_DEV_ID,
      redirectUri: process.env.EBAY_PRODUCTION_REDIRECT_URI,
      baseUrl: "api.ebay.com"
    },
    endpoint: process.env.EBAY_NOTIFICATION_ENDPOINT,
    verificationToken: process.env.EBAY_VERIFICATION_TOKEN
  };