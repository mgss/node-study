const chai = require('chai')
const expect = chai.expect
const TestDemo = require('../lib/http_demo');

const demo = new TestDemo()

describe('AsyncDemo', function() {
  this.timeout(5000)

  it('加载豆瓣API返回的内容里应该包含 subjects 属性', done => {
    demo.fetchData('top250', data => {
      expect(data).to.have.property('subjects')
      done()
    })
  })
});