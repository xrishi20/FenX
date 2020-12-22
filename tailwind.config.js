module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: true,
    content: [
      "./deleteModal.html",
      "./discardModal.html",
      "./index.html",
      "./login.html",
      "./recentActivity.html",
      "./vaults.html",
      "./vaultDashboard.html",
      "./vModal.html",
      "./vUModal.html",
    ],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
