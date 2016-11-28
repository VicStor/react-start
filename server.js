const path = require('path');
const express = require('express');
import colors from 'colors';

const app = express();
const port = 3000;
const isProduction = process.env.NODE_ENV === 'production';

console.log(`Server start in ${process.env.NODE_ENV} environmet`.green);

if (!isProduction) {
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('./webpack.config.js');

  const compiler = webpack(config);

  app.use(webpackHotMiddleware(compiler));
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));
}

app.use(express.static('public'));

// app.get('/', (err, res) => {
//   res.sendFile(path.join(__dirname, '/public/raw.html'));
// });

app.listen(port, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log(`=== >>> 👍 http://localhost:${port}`.green);
  }
});
