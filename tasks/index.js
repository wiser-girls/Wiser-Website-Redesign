import gulp from 'gulp'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import { config as webpackConfig } from './webpack'
import suite from '@cloudcannon/suite'

const bundler = webpack(webpackConfig)

suite.dev(gulp, {
  serve: {
    middleware: [
      webpackDevMiddleware(bundler, { /* options */ }),
      webpackHotMiddleware(bundler)
    ]
  }
});
