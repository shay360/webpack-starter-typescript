const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    performance: { hints: false },
    mode: 'none',
    plugins: [
        new TerserPlugin()
    ],
    module: {
        rules: [

        ]
    }
}
