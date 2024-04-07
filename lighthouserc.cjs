module.exports = {
  ci: {
    collect: {
      startServerCommand: 'bun run preview',
      url: ['http://localhost:4173/'],
      settings: { chromeFlags: '--no-sandbox', preset: 'desktop' },
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'https://lhci.fuuma.net/',
      token: process.env.LHCI_BUILD_TOKEN,
    },
  },
};
