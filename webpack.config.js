module.exports = {
	entry: "./react/app/app.jsx",
	output: {
		path: __dirname,
		filename: "/public/js/bundle.js"
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: "babel"
			}
		]
	},
	devtool: 'source-map'
};
