var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');

var plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
  })
];

if (process.env.NODE_ENV === 'production') {
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        screw_ie8: true,
        warnings: false
      }
    })
  );
}

module.exports = {
  context: path.join(__dirname, "src"),
  // externals: [{
  //   react: 'React',
  //   'react-dom': 'ReactDOM'
  // }],
  module: {
    loaders: [{
      test: /\.jsx$/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'stage-0']
      }
    }]
  },
  resolve: {
    extensions: ['', '.webpack.js', '.web.js', '.js', '.jsx']
  },
  entry: "./index.jsx",
  output: {
    path: __dirname + "/dist/",
    filename: "index.min.js",
    library: 'Dashboard'
  },
  plugins: plugins
};
