// Empty config file to trick Styleguidist not to use the config file from ../..
// You don't need an empty config in your project.

const pkg = require('./package.json');
const path = require('path');
module.exports = {
  title: `${pkg.name} v${pkg.version}`,
  components: 'src/**/*.jsx',

  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        }, {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }, {
          test: /\.styl?/,
          use: ["style-loader", "css-loader", "stylus-loader"]
        }, {
          test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
          loader: 'url-loader',
          options: {
            limit: 10000
          }
        }
      ]
    }
  },
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            'https://use.fontawesome.com/releases/v5.4.1/css/all.css'
        },
        {
          rel: 'stylesheet',
          href:
            "https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
        }
      ]
    }
  },
  require: [
  ],
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.jsx');

    return `import { ${name} } from '${pkg.name}';`;
  },
};