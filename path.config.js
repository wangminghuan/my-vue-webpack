//定义了一些文件夹的路径
var path=require('path');
//var viewName="cateSelect";
var __path={
	ENTRY: path.resolve(__dirname, 'app/index.js'),
	APP: path.resolve(__dirname, 'app/'),
	COMPONENT : path.resolve(__dirname, 'app/components/'),
	BUILD : path.resolve(__dirname, 'build/dist/'),
	OUTPUT_NAME:"bundle.js",
	PUBLIC:"/"
}

module.exports=__path;