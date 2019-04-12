const path = require("path");
const webpack = require("webpack");
const pkg = require("./package.json");

let mode = process.env.NODE_ENV || "development";

module.exports = {
	mode,
	performance: {hints: false},
	entry: [path.resolve(__dirname, "index.js")],
	output: {
		path: path.resolve(__dirname),
		filename: "index.umd.min.js",
		libraryTarget: "umd"
	},
	resolve: {
		extensions: [".js", ".css"]
	},
	resolveLoader: {
		modules: [path.join(__dirname, "node_modules")]
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules|.*\.d.ts/,
				loader: "babel-loader"
			}
		]
	}
};
