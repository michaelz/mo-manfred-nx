const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	output: {
		publicPath: "https://mfe-shell.netlify.app/",
		uniqueName: "shell"
	},
	optimization: {
		// Only needed to bypass a temporary bug
		runtimeChunk: false
	},
	plugins: [
		new ModuleFederationPlugin({
			remotes: {
				'mfe1': "mfe1@https://mfe-flights.netlify.app/remoteEntry.js"
			},
			shared: ["@angular/core", "@angular/common", "@angular/router"]
		})
	],
};