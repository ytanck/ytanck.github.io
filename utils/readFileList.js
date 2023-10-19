/**
 *  读取所有md文件数据
 */
const fs = require("fs"); // 文件模块
const path = require("path"); // 路径模块
const docsRoot = path.join(__dirname, "..", "/post"); // post文件路径

function readFileList(dir = docsRoot, filesList = []) {
  const files = fs.readdirSync(dir);
  files.forEach((item, index) => {
    let filePath = path.join(dir, item);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory() && item !== "images") {
      const filename = path.basename(filePath);
      filesList.push({
        filename,
      });
    }
  });
  return filesList;
}

module.exports = readFileList;
