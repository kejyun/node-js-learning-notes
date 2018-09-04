# Shell 指令

## shelljs

**安裝**

```shell
npm install [-g] shelljs
```

```javascript
// 執行 CLI 指令
var elb_response_cli = shell.exec("aws elb describe-load-balancers --load-balancer-names "+AWS_ELB, {async:true});

// 解析回傳資料
elb_response_cli.stdout.on('data', function(data) {

  // 解析 JSON 資料
  var elb_response = JSON.parse(data);

  console.log(elb_response);
});
```

```javascript
// 執行 CLI 指令
var aws_elb_command = "aws elb describe-load-balancers --load-balancer-names "+AWS_ELB;

// 解析回傳資料
shell.exec(aws_elb_command, function(code, stdout, stderr) {
  // console.log('Exit code:', code);
  console.log('Program output:', stdout);
  console.log('Program stderr:', stderr);
});
```

## 參考資料
* [shelljs - npm](https://www.npmjs.com/package/shelljs)
