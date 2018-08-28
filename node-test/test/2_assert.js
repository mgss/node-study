const chai = require('chai');
const assert = chai.assert;

describe('AssertDemo', ()=>{
  it('使用 assert 风格的断言测试', () => {
    var value = 'hello'
    
    assert.typeOf(value, 'string')
    assert.equal(value, 'hello')
    assert.lengthOf(value, 5)
  })
})