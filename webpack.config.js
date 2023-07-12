const HtmlWebpackPlagin = require ('html-webpack-plugin');
const MiniCSSExtractPlagin =  require('mini-css-extract-plagin');
const path = require('path');


module.exports =  {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
         test: /\.css$/,
         use: [
           MiniCSSExtractPlagin.loader,
          "css-loader"
    ]
  },
     {
          test: /\.html$/,
          loader: "html-loader",
          },
          ],
    plugins: [
    new HtmlWebpackPlagin({
      template: './src/index.html'
    }),
    new MiniCSSExtractPlagin({
       filename: 'bundle.css'
    })
    ]
}

}