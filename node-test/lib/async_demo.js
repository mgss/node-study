class TestDemo {
  waiteTwoSecond (data, callback) {
    setTimeout(()=>{
      callback(data)
    }, 2000)
  }
}
module.exports = TestDemo;