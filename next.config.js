module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    });
    return config;
  },
  images: {
    domains: ['raw.githubusercontent.com', 'i.ibb.co'],
  },
};
