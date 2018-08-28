const chai = require('chai')
const should = chai.should()

describe('ShouldDemo', ()=>{
  it('使用 shuld 风格的断言测试', ()=>{
    let value = 'hello'
    // value.should.exist  // value应该存在
    // value.should.be.a('string')
    // value.should.equal('hello')
    // value.should.not.equal('hello')
    // value.should.have.length(5)

    // 也可以链式测试
    value.should.exist
      .and.be.a('string')
      .and.equal('hello')
      .and.have.length(5)
  })
})