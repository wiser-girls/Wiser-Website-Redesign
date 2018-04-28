const path = require('path');

const config = {
  entry: {
    main: './webpack/js/main.js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["react", "es2015"]
            }
          }
        ]
      }
    ]
  },
  plugins: [],
  output: {
    path: path.resolve(__dirname, 'src/assets'),
    filename: '[name].bundle.js'
  }
};

module.exports = config;