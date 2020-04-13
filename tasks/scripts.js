import webpack from 'webpack'
import { webpackConfig } from './webpack'
// import webpackDevMiddleware from 'webpack-dev-middleware'
// import webpackHotMiddleware from 'webpack-hot-middleware'


// const bundler = webpack(webpackConfig);
// const webpackMiddleware = [
//   webpackDevMiddleware(bundler, { /* options */ }),
//   webpackHotMiddleware(bundler)
// ]

function scripts(cb) {
  return new Promise((resolve, reject) => {
    webpack(webpackConfig, (err, stats) => {
      if (err) {
        return reject(err)
      }
      if (stats.hasErrors()) {
        return reject(new Error(stats.compilation.errors.join('\n')))
      }
      resolve()
    })
  })
}

module.exports = { scripts }