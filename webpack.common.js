const nodeExternals = require('webpack-node-externals')
const externals = nodeExternals({
    modulesFromFile: true
});

module.exports = {
    entry: {
        main: "./src/pizza-restaurant.ts"
    },
    target: 'node',
    node: {
        __dirname: false,
    },
    output: {
        filename: "main.js",
        path: __dirname + "/dist"
    },
    resolve: {
        extensions: [".ts", ".js", ".json"],
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "ts-loader"
            },
        ]
    },
    externals,
};