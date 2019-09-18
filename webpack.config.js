const path = require("path");
const rootPath = path.join(__dirname, ".");
const webpack = require("webpack");
module.exports = {
  entry: {
    main: `./app.js`
  },
  target: 'node',
  output: {
    filename: "[name].[hash].js",
    path: `${rootPath}/public`,
    library: 'node-package-open-source-starter',
    libraryTarget: 'umd',
  },
  // node: {
  //   console: false,
  //   global: true,
  //   process: true,
  //   __filename: "mock",
  //   __dirname: "mock",
  //   Buffer: true,
  //   setImmediate: true,
  //   fs: "empty"
  //   // See "Other node core libraries" for additional options.
  // },
  // resolve: {
  //   modules: [
  //       "node_modules",
  //       path.join(__dirname, 'node_modules')
  //   ],
  //   extensions: [".webpack.js", ".web.js", ".ts", ".js", "*"],
  //   enforceExtension: false
  // },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ]
  }
  //...
  // output: {
  //     path: path.resolve(__dirname, 'dist/assets'),
  //     //...
  //     auxiliaryComment: {
  //         root: 'Root Comment',
  //         commonjs: 'CommonJS Comment',
  //         commonjs2: 'CommonJS2 Comment',
  //         amd: 'AMD Comment'
  //     }
  // }
};
