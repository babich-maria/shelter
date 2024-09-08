

const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js', // точка входа для index.html
    pets: './src/our_pets.js'   // точка входа для pets.html
  },
  output: {
    filename: '[name].js', // использование [name] для генерации отдельных файлов
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'] // загрузчики для работы со SCSS
      }
    ]
  },
};