const nodeExternals = require('webpack-node-externals')
const externals = nodeExternals({
    modulesFromFile: true
});

module.exports = {
    entry: {
        main: "./src/main.ts"
    },
    target: 'node',
    node: {
        __dirname: false,
    },
    output: {
        filename: "[name].js",
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