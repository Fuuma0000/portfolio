module.exports = {
  ci: {
    collect: {
      startServerCommand: 'bun run preview',
      url: ['http://localhost:4173/'],
      // settings: [{ chromeFlags: '--no-sandbox', preset: 'mobile' }],
    },
    upload: {
      target: 'temporary-public-storage', // 結果をアップロードする場所の指定
    },
  },
};
