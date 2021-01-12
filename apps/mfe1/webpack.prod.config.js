const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

module.exports = {
	output: {
		publicPath: "/mfe1/",
		uniqueName: "mfe1"
	},
	optimization: {
		// Only needed to bypass a temporary bug
		runtimeChunk: false
	},
	plugins: [
		new ModuleFederationPlugin({

			// For remotes (please adjust)
			name: "mfe1",
			library: { type: "var", name: "mfe1" },
			filename: "flightsRemoteEntry.js",
			exposes: {
				'./Module': './apps/mfe1/src/app/flights/flights.module.ts',
			},

			shared: ["@angular/core", "@angular/common", "@angular/router"]
		})
	],
};
