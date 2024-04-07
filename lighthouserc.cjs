module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist',
      url: ['/'],
      settings: { chromeFlags: '--no-sandbox', preset: 'desktop' },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.fuuma.net/',
      token: '3f9b7c47-c34d-450f-8aa2-8a69ba283cee',
    },
  },
};
