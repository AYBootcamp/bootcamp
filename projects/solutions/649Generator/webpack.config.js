const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

  entry: ['./src/script.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: '[name]-[hash][ext]'
  },
  mode: "production",
  module: {
    rules: [
        {
            test: /\.css$/,
            use: ['style-loader', {
              loader: "css-loader",
            },
          ]
        },
        {
            test: /\.png/,
            type: 'asset/resource'
        },
        {
          test: /\.html$/i,
          loader: "html-loader",
        },
        { 
            test: /\.js$/, 
            exclude: /node_modules/, 
            use: { 
              loader: "babel-loader", 
              options: { 
                presets: [ "@babel/preset-env", ] 
              } 
            } 
          },    
    ]
  },

  plugins: [
    new HtmlWebpackPlugin({
      inject: 'body',
      template: './src/index.html',
      filename: 'index.html'
    })
  ]
};