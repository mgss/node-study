const chai = require('chai')
const expect = chai.expect
const TestDemo = require('../lib/test_exception');

const demo = new TestDemo()

describe('TestExceptionDemo', function() {
  it('给汽车引擎加水是不能接受的事情', () => {
    // * 方法1
    expect(demo.engine.bind(demo, 'water')).to.throw('not accept')

    // * 方法2
    // expect(()=>{
    //     demo.engine('water')
    // }).to.throw('not accept')
  });
}); 