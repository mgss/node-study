const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/html',
  });
  res.end(`<h1>hello ~</h1>`);
})

server.listen('4444');
console.log('服务器正在运行...');
