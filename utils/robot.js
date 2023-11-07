const axios = require('axios')
console.log(123,process.env);
function dingtalk(content) {
  return axios({
    method: 'post',
    url: 'https://oapi.dingtalk.com/robot/send?access_token=88218abc4700cc2c0b4646de7cbd7db37cf3b96acce62484591d9c57ae9ba420',
    data: {
      msgtype: 'text',
      text: {
        content,
      }
    },
  })
}
dingtalk('又到周五了，记得发日报哦')

