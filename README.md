# Aoffice移动端内容页-静态页(React+Yarn+Webpack制作)—"办公装修"页面



### `node-sass`无法安装-解决方案 
> 因国内网络原因,无法安装`node-sass`依赖,所以将下载好的`node-sass`文件打包做了一个压缩包

1. 开发环境需要将这个`node-sass`文件夹放入`node_modules`文件夹内,然后将`node-sass`的版本`"node-sass": "^3.10.1"`写入`package.json`文件内的本地开发依赖`devDependencies`当中

2. 将`lodash`装入全局当中,输入命令:

	```sh
	npm install -g lodash
	```
3. 将`node-sass-binding`压缩文件中的内容全部放入`C:\node-sass`文件夹内
4. 此时`node-sass`环境组合完成,可执行`yarn run build`命令进行打包了

