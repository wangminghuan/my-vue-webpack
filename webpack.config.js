var webpack=require('webpack');
var __PATH=require('./path.config.js');
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
//var glob = require('glob');
//node的glob模块允许你使用*等符号，来写一个glob规则，像在shell里一样，获取匹配对应规则的文件。


var config = process.env.NODE_ENV === 'production' ? require('./webpack.prod.config.js') : require('./webpack.dev.config.js');
console.log("ev is"+process.env.NODE_ENV);
config.module={
	loaders:[
		{
	        test: /\.vue$/,
	        include: __PATH.APP,
	        exclude: /node_modules/,
	        loader: 'vue-loader',
	        options: {
		        preserveWhitespace: false,
						loaders:{
							scss:"vue-style-loader!css-loader?minimize!sass-loader",
							//需要单独提取css请开启
						// 	scss: ExtractTextPlugin.extract({
	          //     fallback: 'vue-style-loader',
						// 		use: ["css-loader?minimize", "sass-loader"]
            //  })
						},
		        postcss: [
	               autoprefixer({//全球使用统计 >1%
	                  browsers:['last 2 versions', "> 1%", 'Android >= 4.0',"iOS 8"]
	               })
              ]
		    }
      	},
    	{
	        test: /\.(png|jpg)$/,
	        include: __PATH.APP,
	        exclude: /node_modules/,
	        loader: 'url-loader'/*?limit=40000*/
  		},
    	{
		 	 test: /\.js$/,
		 	 include: __PATH.APP,
	         exclude: /node_modules/,
	         loader: 'babel-loader'
    	}
	]
};
config.output={
		path: __PATH.BUILD,
	    publicPath: __PATH.PUBLIC,
	    filename: __PATH.OUTPUT_NAME
	};
config.resolve = {
    extensions: ['.js', ".vue"],
    alias: {
      //    "react":path.resolve(__dirname, 'client/lib/react.min.js'),
    }
  };
module.exports=config;
