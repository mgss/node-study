const https = require('https')

class TestDemo {
  fetchData(api, callback) {
    const requestUrl = `https://api.douban.com/v2/movie/${api}`;
    
    https.get(requestUrl, (res) => {
      let responseData = ''
      res.setEncoding('utf8')

      res.on('data', chunk => {
        responseData += chunk
      })

      res.on('end', () => {
        callback(JSON.parse(responseData))
      })
    })
  }
}
module.exports = TestDemo;