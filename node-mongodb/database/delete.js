const Event = require('../models/event')

Event.findByIdAndRemove('5b865df4d6c3162d4d24a439')
  .then((document) => {
    console.log(document)
  }).catch((err) => {
    
  });