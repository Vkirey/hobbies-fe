const webpack = require('webpack');
const path = require('path')

module.exports = {
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg)$/,
        loader: "url-loader",
      }, 
      {        
          test: /\.(scss|css)$/,
          use: [
              "style-loader",
              "css-loader",
              "sass-loader",
          ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css', '.scss', '.jpg'],
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    alias: {
      views: path.resolve(__dirname, './src/views'),
      constants: path.resolve(__dirname, './src/constants'),
      api: path.resolve(__dirname, '.src/api'),
      actions: path.resolve(__dirname, '.src/actions'),
      components: path.resolve(__dirname, '.src/components'),
      assets: path.resolve(__dirname, '.src/assets'),
      utils: path.resolve(__dirname, '.src/utils')
    }
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: './dist',
    hot: true,
    historyApiFallback: true
  }
};
