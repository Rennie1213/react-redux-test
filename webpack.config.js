var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	watch:   true,
	devtool: 'source-map',
	entry: './src/app.js',
	output: {
		path: __dirname + '/dist',
		filename: 'bundle.[chunkhash].js'
	},
	plugins: [new HtmlWebpackPlugin({
		template: './src/index.html'
	})],
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader'
			}
		]
	}
}
