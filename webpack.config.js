const path = require("path");

module.exports = {
    resolve: {
        modules: [
            path.resolve("./lib"),
            path.resolve("./node_modules"),
        ]
    },
    mode: "development",
    entry: "./lib/renderers/dom.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "public"),
    },
    devServer: {
        static: [
            {
                directory: path.join(__dirname, "example"),
            },
            {
                directory: path.join(__dirname, "public"),
            },
        ],
        port: 4000,
        liveReload: true,
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "sass-loader" },
                ],
            },
            {
                test: /\.(png|jpeg|jpg|svg)$/,
                type: "asset/resource",
            },
        ],
    },
};
