const Dotenv = require('dotenv-webpack');
module.exports = {
  plugins: [
    new Dotenv()
  ],
  entry: ['./src/index.js'],
  output: {
    path: __dirname,
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/, // include .js files
        exclude: /node_modules/,
  //      use: [{
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'stage-1']
          }
  //      }]
      }
    ]
  },
  //resolve: {
  //  extensions: ['', '.js', '.jsx']
  //},
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
};
