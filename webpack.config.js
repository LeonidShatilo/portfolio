const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

const filename = (ext) => (isDev ? `[name].${ext}` : `[name].[hash].${ext}`);

const babelOptions = (preset) => {
  const opts = {
    presets: ['@babel/preset-env'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  };

  if (preset) {
    opts.presets.push(preset);
  }

  return opts;
};

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all',
    },
  };

  if (isProd) {
    config.minimize = true;
    config.minimizer = [new CssMinimizerPlugin(), new TerserWebpackPlugin()];
  }

  return config;
};

const plugins = () => {
  const basePlugins = [
    new CleanWebpackPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
      filename: 'index.html',
      minify: {
        collapseWhitespace: isProd,
      },
    }),
    new MiniCssExtractPlugin({
      filename: `./src/styles/${filename('css')}`,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/assets/favicon.ico'),
          to: path.resolve(__dirname, 'dist/assets'),
        },
      ],
    }),
  ];

  return basePlugins;
};

const cssLoaders = (extra) => {
  const loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        publicPath: (resourcePath, context) => `${path.relative(path.dirname(resourcePath), context)}../../`,
      },
    },
    'css-loader',
    'postcss-loader',
  ];

  if (extra) {
    loaders.push(extra);
  }

  return loaders;
};

const jsLoaders = () => {
  const loaders = [
    {
      loader: 'babel-loader',
      options: babelOptions(),
    },
  ];

  if (isDev) {
    loaders.push('eslint-loader');
  }

  return loaders;
};

const devServer = () => {
  const config = {
    port: 8080,
    contentBase: path.resolve(__dirname, 'dist'),
    hot: true,
    open: true,
    inline: true,
    compress: true,
    historyApiFallback: true,
  };

  return config;
};

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: ['@babel/polyfill', './app.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `./src/scripts/${filename('js')}`,
    publicPath: '',
  },
  resolve: {
    extensions: ['.html', 'scss', '.js'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  devServer: devServer(),
  plugins: plugins(),
  optimization: optimization(),
  devtool: isDev ? 'source-map' : 'eval',
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.css$/i,
        use: cssLoaders(),
      },
      {
        test: /\.s[ac]ss$/,
        use: cssLoaders('sass-loader'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders(),
      },
      {
        test: /\.(svg|png|jpe?g|gif)$/i,
        type: 'asset/resource',
        generator: {
          filename: isDev
            ? `assets/images/[name][ext]`
            : `assets/images/[hash][ext]`,
        },
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        type: 'asset/resource',
        generator: {
          filename: isDev
            ? `assets/fonts/[name][ext]`
            : `assets/fonts/[hash][ext]`,
        },
      },
    ],
  },
};
