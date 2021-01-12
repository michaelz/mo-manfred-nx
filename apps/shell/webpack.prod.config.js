const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	output: {
		publicPath: "/",
		uniqueName: "shell"
	},
	optimization: {
		// Only needed to bypass a temporary bug
		runtimeChunk: false
	},
	plugins: [
		new ModuleFederationPlugin({
			remotes: {
				'mfe1': "mfe1@/remoteEntry.js"
			},
			shared: ["@angular/core", "@angular/common", "@angular/router"]
		})
	],
};