# sugar-scan
## 如何使用
### 引入

```
const Scan = require('sugar-scan')
```

### 初始化

```
const scan = new Scan({
	path: './',
	ext: '*',
});
```

### 获取文件列表

直接读取scan实例的files属性，返回的是Map对象。

```
const files = scan.files;

```

### 参数

* path - 扫描的路径，必须传递，否则报错
* ext - 扫描的扩展名，默认"*"，表示所有后缀的文件，可以按数组传递