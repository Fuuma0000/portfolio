module.exports = {
  ci: {
    collect: {
      staticDistDir: './dist', // ビルドされたファイルのディレクトリ
      url: ['http://localhost/index.html'],
      isSinglePageApplication: true, // シングルページアプリケーションの場合は true
      settings: { chromeFlags: '--no-sandbox', preset: 'desktop' }, // Lighthouseの設定
    },
    upload: {
      target: 'temporary-public-storage', // 結果をアップロードする場所の指定
    },
  },
};
