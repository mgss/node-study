const chai = require('chai')
const expect = chai.expect
const TestDemo = require('../lib/method_demo');

const demo = new TestDemo()

describe('MethodDemo', () => {
  it('单价是 10 块钱的 3 件商品小计金额应该是 30 块', ()=>{
    let subtotal = demo.subtotal(10, 3)
    expect(subtotal).to.equal(30)
    expect(subtotal).to.exist
  })
});