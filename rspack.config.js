module.exports = {
  entry: "./src/index.js",
  output: {
    path: "./rspack-dist",
  },
  module: {
    rules: [
      {
        type: "css/module",
        test: /\.css$/,
        // use: [
        //   {
        //     loader: "sass-loader",
        //   }
        // ],
      },
    ],
  },
  optimization: {
    minimize: false,
  },
};
