const path = require('path');

module.exports = {
  externals: {
    react: 'React'
  },
  
  module: {
    /*
    rules: [
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"],
        include: path.resolve(__dirname, '../')
      }
    ]
    */
  },

  resolve: {
    // so that `npm link`'s load modules correctly
    symlinks: false
  }
}