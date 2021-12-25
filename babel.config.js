
module.exports = {
  presets: [
    '@quasar/babel-preset-app'
  ],
  "plugins": [
    [
      "@babel/plugin-proposal-class-properties",
      {
        "loose": true
      }
    ]
  ]
}
