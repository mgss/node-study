const http = require('http');

const options = {
  protocol: 'http:',
  hostname: 'api.douban.com',
  port: '80',
  method: 'GET',
  path: '/v2/movie/top250?count=10'
}
let responseData = ''
let index = 0
const request = http.request(options, res => {
  // console.log(res)
  // console.log(res.statusCode)
  // console.log(res.headers)
  res.setEncoding('utf-8');
  res.on('data', chunk => {
    // console.log(chunk);
    responseData += chunk;
  })
  res.on('end', () => {
    // 将字符串转换为JSON，并将subjects字段下的排名和电影名输出
    JSON.parse(responseData).subjects.map(item => {
      console.log(`TOP ${++index} - ${item.title} - ${item.rating.average}分`);
    })
  })
})

request.on('error', error => {
  console.log(error);
})

request.end();