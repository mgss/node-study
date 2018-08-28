const chai = require('chai')
const expect = chai.expect
const TestDemo = require('../lib/async_demo');

const demo = new TestDemo()

describe('AsyncDemo', function() {
  this.timeout(5000)

  it('一段时间后返回数据', done => {
    demo.waiteTwoSecond('hello', data => {
      expect(data).to.equal('hello')
      done()
    })
  })
});