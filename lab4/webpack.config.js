const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    }, 

  devServer: {
    static: './dist',
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: "src/assets", to: "dist/assets" },
        { from: "src/pages", to: "dist/pages" },
      ],
    }),
  ],

  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  
  mode: 'development'
};

