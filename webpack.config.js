const path = require('path'); //путь до корня проекта(реализ через resolve)

module.exports = {
  entry: './source/js/main.js', //точка входа
  devtool: 'source-map',//добавляет к бандлу карту исходников
  output: {// точка выхода
    filename: 'main.bundle.js',
    path: path.resolve(__dirname, 'docs/js'),//__dirname-cохраняет путь до текущей рабочей директории; сохраняет путь куда складывается файлы из текущей директории
  },
};
