var path = require('path')
var webpack = require('webpack')

const PAGES = path.resolve(__dirname, "src/pages");
const COMPONENTS = path.resolve(__dirname, "src/components");

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this necessary.
            'scss': 'vue-style-loader!css-loader!sass-loader',
            'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
			pages: PAGES,
			components: COMPONENTS,
    }
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    quiet: true,
    compress: true,
    open: true,
    port: 4000,
    contentBase: path.join(__dirname, ""),
    index: 'index.html',
    publicPath: "/chucknorris/dist/",
    openPage: 'chucknorris/index.html',
    proxy: {
      "/chucknorris": {
        target: "http://localhost:4000",
        bypass: function(req, res, proxyOptions) {
          let view = req.url.replace('/chucknorris', '')
          return view;
        }
      }
    }
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    })
  ])
}
