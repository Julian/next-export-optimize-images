const withExportImages = require('../../dist')

const config = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = withExportImages(config, { configPath: '__tests__/e2e/export-images.config.js' })
