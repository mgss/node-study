const data = require('./SimpleEvents.json')
const Event = require('../../models/event')

Event.insertMany(data)
  .then((document) => {
    console.log('数据处理成功')
  }).catch((err) => {
    console.log(err);
  });