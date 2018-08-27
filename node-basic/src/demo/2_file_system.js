const fs = require('fs');

/***
 * ? Demo1 - File Stat
 * * 返回文件的文件信息
 * * 返回是否是目录或者文件
 */

// fs.stat('index.js', (error, stats)=>{
//   if(error) {
//     console.log(error)
//   }else{
//     console.log(stats)
//     console.log(`是否是文件：${stats.isFile()}`)
//     console.log(`是否是目录：${stats.isDirectory()}`)
//   }
// });

/***
 * ? Demo2 - File Mkdir
 * * 创建目录
 */

// fs.mkdir('./src/demo/logs',error => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(`成功创建目录：logs`)
//   }
// })

/***
 * ? Demo2 - File writeFile，appendFile
 * * 创建文件，并写入内容
 * * 追加内容
 */

//  const textContent = 'hello~ \n';
//  fs.writeFile(
//     './src/demo/logs/hello.log', 
//     textContent,
//     error => {
//       if (error) {
//         console.log(error)
//       }else{
//         console.log('成功写入文件');
//       }
//     }
//   )
//   fs.appendFile(
//     './src/demo/logs/hello.log', 
//     textContent,
//     error => {
//       if (error) {
//         console.log(error)
//       }else{
//         console.log('成功追加文件');
//       }
//     }
//   )

/***
 * ? Demo3 - File readDir
 * * 读取文件里的内容
 */

//  fs.readFile(
//    './src/demo/logs/hello.log',
//    'utf-8',
//    (error, data) => {
//       if (error) {
//         console.log(error)
//       } else {
//         console.log(data)
//       }
//    }
//  )

/***
 * ? Demo4 - File readFile
 * * 读取文件夹里的内容
 */

//  fs.readdir('./src/demo/logs', (error, files) => {
//    if (error) {
//      console.log(error);
//    }else{
//      console.log(files)
//    }
//  })

/***
 * ? Demo4 - File rename
 * * 重命名文件或目录
 */

// fs.rename(
//    './src/demo/logs/hello.log',
//    './src/demo/logs/greeting.log',
//   error => {
//     if (error) {
//       console.log(error)
//     }else{
//       console.log('重命名成功')
//     }
//   },
// )

/***
 * ? Demo5 - File rmdir unlink
 * * 删除文件夹/删除文件
 */
// 删除文件
// fs.readdirSync('./src/demo/logs').map(file => {
//   fs.unlink(`./src/demo/logs/${file}`, error => {
//     if (error) {
//       console.log(error);
//     } else {
//        console.log(`文件${file}已被成功删除`)
//     }
//   })
// })

// 删除目录前需要先删除目录内的文件 ↑
// fs.rmdir(
//   './src/demo/logs',
//   error => {
//     if (error) {
//       console.log(error)
//     }else{
//       console.log(`目录删除成功`)
//     }
//   }
// )

