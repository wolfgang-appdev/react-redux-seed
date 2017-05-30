const path = require("path");

module.exports = {

    entry: [
        "babel-polyfill",
        "./src/js/index.js"
    ],

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "bin")
    },

    devServer: {
        historyApiFallback: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader",
                    "postcss-loader"
                ]
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                loader: "file-loader"
            },
            {
                test: /\.png|jpg|jpeg$/,
                loader: "file-loader"
            }
        ]
    }

};
