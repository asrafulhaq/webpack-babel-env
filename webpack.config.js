const path = require('path');


module.exports = {
    mode : "development",
    entry : './src/app.js',
    output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'app.bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,
                exclude : /(node_modules)/,
                loader : 'babel-loader'
            }
        ]
    }
}