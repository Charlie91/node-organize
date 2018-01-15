module.exports = {
    entry: "./app/front/index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    watch:true,
    module: {
        loaders: [
            {
              test: /\.css$/,
              loader: "style-loader!css-loader"
            },
            {
              test: /.js?$/,
              loader: 'babel-loader',
              exclude: /node_modules/,
              query:
                {
                  presets: ['es2015', 'react']
                }
            }
        ]
    }
};
