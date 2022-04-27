const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    }, 

  devServer: {
    static: './dist',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/pages/index.html'
    }),
    new HtmlWebpackPlugin({
      filename: 'about.html',
      template: 'src/pages/about.html'
    }), 
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
  mode: 'development'
};

