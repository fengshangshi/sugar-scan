/**
 * @file 测试代码，单元测试用
 * @author ss.feng
 */
'use strict'

const Scan = require('.');

const scan = new Scan({
	ext: '*',
	path: './test',	
});

//console.log(scan.files);

let files = scan.files;
console.log(files);
