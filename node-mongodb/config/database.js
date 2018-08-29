const mongoose = require('mongoose');

const uri = 'mongodb://localhost:27017/revent'
const options = {
  // useMongoClient: true,
  promiseLibrary: global.Promise,
  useNewUrlParser: true
}

// mongoose.Promise = global.Promise
mongoose
  .connect(uri, options)
  .then(db => {
    console.log('数据库连接成功')
  })
  .catch(error => {
    console.log('数据库连接失败')
  })

module.exports =  mongoose  