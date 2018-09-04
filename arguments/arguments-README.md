# 參數

## 接收 CLI 傳入的參數

**原生**

會接收所有 CLI 的參數，包括檔案名稱

```javascript
var args = process.argv;
```

**yargs 套件**

```shell
npm install yargs
```

```javascript
'use strict';

const args = require('yargs').argv;

console.log('Name: ' + args.name);  
console.log('Age: ' + args.age);
```

```shell
node yargs.js --name=jacob --age=45
Name: jacob  
Age: 45
```

## 參考資料
* [Command Line Arguments in Node.js](https://stackabuse.com/command-line-arguments-in-node-js/)
