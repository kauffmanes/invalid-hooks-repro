const path = require('path');

module.exports = {
    entry: './src/index.ts',
    mode: process.env.NODE_ENV || 'development',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        clean: false,
        libraryTarget: 'umd',
        globalObject: 'this'
    },
    devtool: 'eval',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx']
    }
};
