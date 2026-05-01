module.exports = {
    isProduction: process.env.ELEVENTY_ENV === "PROD",
    host: "0.0.0.0",
    port: 5000,
    domainDiagnostics: false,
    showAllHosts: true,
    enabled: true,
};
