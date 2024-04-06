module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist/index.html',
      isSinglePageApplication: true,
      settings: { chromeFlags: '--no-sandbox', preset: 'desktop' },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
