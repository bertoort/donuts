module.exports = {
	entry: ["./react/app/app.jsx", "./sass/style.scss"],
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
			},
			{
				test: /\.scss?$/,
				loaders: ["style", "css?sourceMap", "sass?sourceMap"]
			}
		]
	},
	devtool: 'source-map'
};
