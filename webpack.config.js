const path = require('path');




module.exports = (env)=>{

  const isProduction = process.env.NODE_ENV === 'production';

  return{
  entry: ['babel-polyfill','./src/app.js'],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    },{
      test: /\.(jpe?g|png|gif|svg)$/,
      use: [
        {
          loader: 'url-loader',
          options: { limit: 400000 }
        },
        'image-webpack-loader'
      ]
    }
  ]
  },
  devtool: isProduction ? 'source-map' : 'inline-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
}
};
