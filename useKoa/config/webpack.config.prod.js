const {merge} =require('webpack-merge')
const baseWebpackConfig=require('./webpack.config.base')
const TerserPlugin = require("terser-webpack-plugin")

const webpackConfig=merge(baseWebpackConfig,{
    mode:'production',
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: 'commons',
                    chunks: 'initial',
                    minChunks: 3,
                    enforce:true
                },
            },
        }
    }
})

module.exports=webpackConfig