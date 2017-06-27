var webpack=require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var __PATH=require('./path.config.js');
var config={};

config.entry=[ //利用中间件实现热更新，reload=true配置如果热更新失败，强制刷新页面
    __PATH.ENTRY
  ];
//忽略下面模板，打包时无需打入
config.externals={
    'vue': 'window.Vue'
};

config.plugins=[
    //提取单独css
    // new ExtractTextPlugin("style.css"),
    //允许错误不打断程序
    new webpack.NoEmitOnErrorsPlugin(),
    // 压缩js
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,  // remove all comments
      },
        compress: {
            warnings: false
        }
    })
];

module.exports=config;
