var version = '4.4.6';

Package.describe({
  name: 'thisninja:swiper',
  summary: 'Swiper - mobile touch slider with hardware accelerated transitions and native behavior',
  version: version,
  git: 'https://github.com/thisninja/Swiper'
});

Package.onUse(function (api) {
  api.versionsFrom('1.1.0.2');

  api.addFiles([
    'dist/css/swiper.min.css',
    'dist/js/swiper.js'
    ], ['client']
  );
});

Package.onTest(function (api) {});
