const path = require('path');

const config = {
  entry: {
    main: './webpack/js/main.js',
    styles: ['./webpack/scss/main.scss']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].css',
              outputPath: 'assets/css/'
            }
          },
          {
            loader: 'extract-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader'
          },
          {
            loader: 'sass-loader'
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