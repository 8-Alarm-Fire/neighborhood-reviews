const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");
var SRC_DIR = path.join(__dirname, 'client/src/index.jsx');

module.exports = {
  mode: 'production',
  entry: SRC_DIR,
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/public'),
  },

  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.css$/i,
        exclude: /node_modules/,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[name]__[local]___[hash:base64:5]',
              },
            },
          }],
      },
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css"],
  },
  plugins: [new CompressionPlugin()],
};
