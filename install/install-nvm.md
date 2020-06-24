# 安裝 NVM (Node Version Manager)

> 作業系統 : Ubuntu 14.04

> 測試時間 : 2016-01-10

## 安裝 NVM

```shell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
```

```shell
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash
wget -qO- https://raw.githubusercontent.com/creationix/nvm/v0.33.11/install.sh | bash
```

## 設定 NVM 環境變數

在 `~/.bash_profile`,`~/.bashrc`, `~/.profile`, 或 `~/.zshrc` 設定環境變數

```shell
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # 讀取 NVM
```

設定完後，重新開啟 terminal 就可以使用 nvm 指令摟～

## 參考資料
* [GitHub - nvm-sh/nvm: Node Version Manager - POSIX-compliant bash script to manage multiple active node.js versions](https://github.com/nvm-sh/nvm)
* [creationix/nvm](https://github.com/creationix/nvm)
