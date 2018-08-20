# 使用 NVM 安裝 Node.js

## 確認可以安裝版本清單

使用 `nvm ls-remote` 可以看到目前 nvm 可以安裝的所有 node.js 版本

```shell
nvm ls-remote
```

## 安裝指定版本 v8.11.4 的 node.js

```shell
nvm install v8.11.4
```

## 指定 nvm 使用的 Node.js 版本

```shell
nvm use v8.11.4
```

## 預設使用 v8.11.4 版本，否則每次重新連線登入，還需要重新 nvm use 一次

```shell
nvm alias default v8.11.4
```
