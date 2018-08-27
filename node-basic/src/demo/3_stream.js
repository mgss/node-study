const fs = require('fs');
const zlib = require('zlib');

let count = 0
const fileReadStream = fs.createReadStream('./src/demo/data/data.json');
const fileWriteStream = fs.createWriteStream('./src/demo/data/data.json.gz')

// ? 读取的文件直接以字符串输出
// fileReadStream.once('data', chunk => {
//   console.log(chunk.toString())
// })

// ? 获得读取文件流每次读取的长度 默认为65536
// fileReadStream.on('data', chunk => {
//   console.log(`第${++count}次接收到：${chunk.length}`)
//   ? 每次读取完文件后同步写入到data_write.json文件中
//   fileWriteStream.write(chunk);
// })

// ? 读取文件流结束以后可触发
// fileReadStream.on('end', () => {
//   console.log(`=========结束=========`)
// })

// ? 读取中出现错误可捕获错误
// fileReadStream.on('error', (error) => {
//   console.log(error);
// })

// ? pipe读取文件流时加工数据
// fileReadStream.pipe(fileWriteStream);

// fileWriteStream.on('pipe', source => {
//   console.log(source);
// })

// ? 多个pipe
// fileReadStream
//   .pipe(zlib.createGzip())
//   .pipe(fileWriteStream);
