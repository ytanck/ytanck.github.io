/**
 * 生成百度链接推送文件urls.txt
 */
const fs = require('fs');
const path = require('path');
// const chalk = require('chalk')
const readFileList = require('./readFileList');
const urlsRoot = path.join(__dirname, '..', 'urls.txt'); // 百度链接推送文件
const DOMAIN = process.argv.splice(2)[0]; // 获取命令行传入的参数

if (DOMAIN) {
  main();
} else {
  console.log('请在运行此文件时指定一个你要进行百度推送的域名参数，例：node utils/baiduPush.js https://yyff.wang')
}

/**
 * 主体函数
 */
function main() {
  fs.writeFileSync(urlsRoot, DOMAIN)
  const files = readFileList(); // 读取所有md文件数据
  files.forEach(file => {
    if (file.filename) {
      const link = `\r\n${DOMAIN}/post/${file.filename}`;
      // console.log(link)
      fs.appendFileSync(urlsRoot, link);
    }
  })
}
