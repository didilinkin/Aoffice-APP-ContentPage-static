## webpack.config.js 配置信息

`entry`:指定打包的入口文件，每有一个键值对，就是一个入口文件。

`output`：配置打包结果，path定义了输出的文件夹，filename则定义了打包结果文件的名称，filename里面的[name]会由entry中的键替换,例子中的/build/bundle.js便是生成的文件。

`module`：定义了对模块的处理逻辑，这里可以用loaders定义了一系列的加载器，以及一些正则。当需要加载的文件匹配test的正则时，就会进行处理。这里我们使用了react-hot 和 babel。babel-loader是我们使用ES-6进行开发时用于生成JS文件。

`loader`对文件进行处理，这正是webpack强大的原因。
比如这里定义了凡是.js结尾的文件都是用babel-loader做处理，而.jsx结尾的文件会先经过jsx-loader处理，然后经过babel-loader处理。yarn add添加这些插件。babel中的preset配置你也可以.babelr文件中定义：
```js
{ "presets": [ "es2015", "react"] }
```

## `src/app.js` 包含路由组件的文件
头部是我们将要用的react和react-router的模块引进来。

同时我们把用到的组件Links,Start,Guide等引进来。

然后我们需要配置router

在Route中设置具体的path 和组件。

## `src/components/links.js` 路由切换文件
在Link 中我们可以指定具体的路由地址。
