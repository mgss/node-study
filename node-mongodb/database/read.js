const Event = require('../models/event')

Event.find()
  .then((documents) => {
    console.log('\nfind 所有的文档: \n', documents)
  }).catch((err) => {
    console.log(err);
  });

Event.find({ title: 'Node.js 开发者大会'})
  .then((documents) => {
    console.log('\nfind 指定标题的文档: \n', documents)
  }).catch((err) => {
    console.log(err);
  });

Event.findOne({ title: 'Node.js 开发者大会'})
  .then((document) => {
    console.log('\nfindOne 指定标题的文档: \n', document)
  }).catch((err) => {
    console.log(err);
  });

Event.findOne({ _id: '5b865df4d6c3162d4d24a439'})
  .then((document) => {
    console.log('\nfindOne 指定 _id 的文档: \n', document)
  }).catch((err) => {
    console.log(err);
  });

Event.findById({ _id: '5b865df4d6c3162d4d24a438'})
  .then((document) => {
    console.log('\nfindById 指定 _id 的文档: \n', document)
  }).catch((err) => {
    console.log(err);
  });