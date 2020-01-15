const path = require('path');
module.exports = {
    entry: './src/index.ts',
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, 'dist')
    },
    performance: { hints: false },
    mode: 'none',
    module: {
        rules: [

        ]
    }
}
