

module.exports = {
    entry: './src/front/index.js',
    watchOptions: {
        poll: true,
        ignored: /node_modules/
    },
    output: {
        path: __dirname + '/traduceReact',
        filename: 'bundle.js'
    },
    module: {
        rules: [

            {
                test: /\.js$/,
                use: [{ loader: 'babel-loader' }],
                exclude: /node_modules/
            }, {
                test: /\.css$/,
                use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
                exclude: /node_modules/
            },
            {
                test: /\.s[ac]ss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader',],
                exclude: /node_modules/
            },
            {
                test: /\.(jpe?g|png|gif)$/,
                use: [{ loader: 'file-loader?name=img/[name]__[hash:base64:5].[ext]' }],
                exclude: /node_modules/
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                use: [{ loader: 'file-loader?name=font/[name]__[hash:base64:5].[ext]' }],
                exclude: /node_modules/
            }, {
                test: /\.svg$/,
                use: ['@svgr/webpack'],
            },
        ]
    }

}