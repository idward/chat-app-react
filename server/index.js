const express = require('express');
const webpack = require('webpack');
const path = require('path');
const webpackConfig = require('../webpack.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const app = express();

const port = process.env.PORT || 4000;

const compiler = webpack(webpackConfig);

// static assets
app.use(express.static(path.resolve(__dirname, '../dist')));

// webpackDevMiddleware
app.use(
  webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
    stats: { colors: true },
    writeToDisk: true,
  }),
);

// webpackHotMiddleware
app.use(webpackHotMiddleware(compiler));

app.get('**', (req, res) => {
  console.log('url', req.url);
  res.sendFile(path.resolve(__dirname, '../dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
