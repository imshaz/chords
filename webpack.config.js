const webpack = require('webpack')

module.exports = {
    mode: "none",
    entry: "./script.js",
    output: {
        filename: "main.js"
    },
    node: {
        fs: "empty"
    }
}