const path = require('path');
const webpack = require('webpack');

module.exports = (env, { mode = 'development' }) => {
  return {
    target: 'node',
    entry: {
      index: './src/index.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].bundle.js',
      libraryTarget: 'commonjs2',
    },
    mode,
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },

    resolve: {
      alias: {
        Utilities: path.resolve(__dirname, 'src/utils/'),
        Config: path.resolve(__dirname, 'src/config/'),
        Modules: path.resolve(__dirname, 'src/modules/'),
      },
    },

    plugins: [new webpack.IgnorePlugin(/^pg-native$/)],
  };
};
