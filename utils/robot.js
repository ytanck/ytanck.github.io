const axios = require('axios')
function dingtalk(content) {
  return axios({
    method: 'post',
    url: 'https://oapi.dingtalk.com/robot/send?access_token=88218abc4700cc2c0b4646de7cbd7db37cf3b96acce62484591d9c57ae9ba420',// 测试
    // url: 'https://oapi.dingtalk.com/robot/send?access_token=fbad06cb691dfbd2ba54595e533c34cada047d32df95966903fcaddbcf48d702',// 前端群
    data: {
      msgtype: 'text',
      text: {
        content,
      }
    },
  })
}
dingtalk('报工提醒：又到周五了，记得发日报哦!')

