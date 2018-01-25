const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports =  {
	devtool: 'inline-source-map',
	entry: [
		'babel-polyfill',
		'react-hot-loader/patch',
		path.resolve(__dirname, 'src/index.jsx')
	],
	target: 'web',
	output: {
		path: path.resolve(__dirname, 'src'),
		publicPath: '/',
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	plugins: [
		// Create HTML file that includes reference to bundle.js
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			inject: true
		}),

		// Create a seperate bundle of vendor libraries to cache seperately
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor',
			filename: 'vendor.js',
			minChunks (module) {
				const context = module.context;
				return context &&
					context.includes('node_modules');
			}
		})
	],
	module: {
		rules: [
			{test: /\.jsx?$/, exclude: /node_modules/, loaders: ['babel-loader']},
			{test: /\.css$/, loaders: ['style-loader', 'css-loader']}
		]
	},
	devServer: {
		hot: true,
		inline: true,
		port: 3000
	}
}
