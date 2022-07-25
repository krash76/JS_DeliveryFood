const path = require('path');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
      main:   './index.js',
      secondary: './secondary.js'
    },
  
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        hot: true,
        compress: true,
        port: 9000,
        static: {
            directory: path.resolve(__dirname, 'public'),
            watch: true,
        },
    },
    devtool: 'eval-source-map'
};