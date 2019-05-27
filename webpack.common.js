const { VueLoaderPlugin } = require("vue-loader"),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.sass$/,
        use: ['vue-style-loader', 'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true
            }
          }
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        query: {
          limit: 10000,
          name: 'images/[name].[ext]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 1000,
          name: 'fonts/[name].[ext]'
        }
      },
      {
        test: /\.(webm|mp4)$/,
        loader: 'file-loader',
        options: {
          name: 'videos/[name].[ext]'
        }
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: require('html-webpack-template'),
      inject: false,
      mobile: true,
      cache: false,
      minify: true,
      // your app title below
      title: '',
      meta: [
        {
          charset: 'UTF-8'
        },
        {
          name: 'author',
          // your name below
          content: ''
        },
        {
          name: 'description',
          // your app description below
          content: ''
        }
      ],
      links: [
        "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.css",
        "https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"
        // all CDN links here as strings
      ],
      appMountId: 'root',
      bodyHtmlSnippet: `<noscript>Please enable JavaScript...</noscript>`,
      scripts: [
        "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.7/semantic.min.js",
        "https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js"
        // all other script tags here
        // note: webpack will automatically insert all necessary
        //       script tags for all files produced from build
      ]
    })
  ],
};
