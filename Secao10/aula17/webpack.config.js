const path = require("path");
// CommonJS

module.exports = {
  //modo de exportação, se vai ou não
  //compactar o arquivo
  //como reduzir o tamanho de variáveis
  //e deixar tudo em uma só linha
  mode: "development",
  entry: "./frontend/main.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        exclude: /node_modules/,
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
      {
        test: /\.css/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "source-map",
};
