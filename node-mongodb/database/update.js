const Event = require('../models/event')
let id = '5b865df4d6c3162d4d24a43a'
let body = {
  title: '2018 Google I/O 开发者大会'
}

Event.findByIdAndUpdate(id, { $set: body}, {new: true})
  .then((document) => {
    console.log(document);
  }).catch((err) => {
    console.log(error);
  });