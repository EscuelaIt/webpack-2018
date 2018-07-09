const HtmlWebPackPugin = require('html-webpack-plugin'),
  MiniCssExtractPlugin = require('mini-css-extract-plugin'),
  CleanWebpackPlugin = require('clean-webpack-plugin'),
  { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  entry: {
    js: './src/index.js',
    vanilla: './src/hello_vanilla.js',
    react: './src/hello_react.js',
    vue: './src/hello_vue.js',
    ts: './src/hello_ts.js',
    todo: './src/to_do.js'
  },
  output: {
    filename: '[name].[chunkhash].js'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
            options: { minimize: true }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        use: [
          'style-loader',
          MiniCssExtractPlugin.loader,
          'css-loader?minimize&sourceMap',
          'postcss-loader?sourceMap',
          'resolve-url-loader',
          'sass-loader?outputStyle=compressed&sourceMap'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg|webp)$/i,
        use: [
          'file-loader?name=assets/[name].[ext]',
          'image-webpack-loader?bypassOnDebug'
        ]
      },
      {
        test: /\.(ttf|eot|woff2?|mp4|mp3|txt|xml|pdf)$/i,
        use: 'file-loader?name=assets/[name].[ext]'
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        use: {
          loader: 'vue-loader'
        }
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader'
        }
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist/**/*.*']),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebPackPugin({
      template: './src/template.html',
      filename: './index.html',
      hash: true,
      chunks: ['js']
    }),
    new HtmlWebPackPugin({
      template: './src/template.html',
      filename: './hello-vanilla.html',
      hash: true,
      chunks: ['vanilla']
    }),
    new HtmlWebPackPugin({
      template: './src/template.html',
      filename: './hello-react.html',
      hash: true,
      chunks: ['react']
    }),
    new HtmlWebPackPugin({
      template: './src/template.html',
      filename: './hello-vue.html',
      hash: true,
      chunks: ['vue']
    }),
    new HtmlWebPackPugin({
      template: './src/template.html',
      filename: './hello-ts.html',
      hash: true,
      chunks: ['ts']
    }),
    new VueLoaderPlugin(),
    new HtmlWebPackPugin({
      template: './src/template.html',
      filename: './to-do.html',
      hash: true,
      chunks: ['todo']
    }),
  ]
}
