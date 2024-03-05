// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/A0020-this-em-funcoes/A0020-this-em-funcoes.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules|\.d\.ts$/,
        options: {
          configFile: 'tsconfig.frontend.json',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
};
