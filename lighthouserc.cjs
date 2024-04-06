module.exports = {
  ci: {
    collect: {
      startServerCommand: 'bun run preview', // サーバーを起動するコマンド
      url: ['http://localhost:4173/'],
      settings: { chromeFlags: '--no-sandbox', preset: 'desktop' }, // Lighthouseの設定
    },
    upload: {
      target: 'temporary-public-storage', // 結果をアップロードする場所の指定
    },
  },
};
