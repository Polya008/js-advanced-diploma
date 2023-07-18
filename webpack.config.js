const HtmlWebpackPlugin = require ('html-webpack-plugin');
const MiniCSSExtractPlugin =  require('mini-css-extract-plugin');
const path = require('path');


module.exports =  {
  output: {
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [{
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
         test: /\.css$/,
         use: [
           MiniCSSExtractPlugin.loader,
          "css-loader"
    ]
  },
     {
          test: /\.html$/,
          loader: "html-loader",
          },
          ],

    plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCSSExtractPlugin({
       filename: 'bundle.css'
    })
    ]
}

}




