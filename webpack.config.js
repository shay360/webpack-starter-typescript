const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    performance: {hints: false},
    mode: 'none',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: { // Tell webpack to read ts and js files
        extensions: [
            '.ts', '.js'
        ]
    }
}
