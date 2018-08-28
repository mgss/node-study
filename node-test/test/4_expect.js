const chai = require('chai')
const expect = chai.expect

describe('ExpectDemo', () => {
  it('使用 expect 风格的断言测试', () => {
    var value = 'hello'
    expect(value).to.exist
    expect(value).to.be.a('string')
    expect(value).to.equal('hello')
    expect(value).to.not.equal('您好')
    expect(value).to.have.length(5)

    var number = 3
    expect(number).to.be.at.most(5)   // 最多是
    expect(number).to.be.at.least(3)  // 最小是
    expect(number).to.be.within(1, 3) // 处于区间之内
  })
})
