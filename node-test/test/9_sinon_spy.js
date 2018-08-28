const chai = require('chai')
const sinon = require('sinon')
const expect = chai.expect
const TestDemo = require('../lib/sinon_spy_demo');

const demo = new TestDemo()

describe('TestExceptionDemo', function() {
  // * 1. sinon.spy可以跟踪函数调用的情况，每次调用传了什么参数，调用了几次等
  it('测试使用 Sinon Spy', () => {
    sinon.spy(demo, 'logMessage')
    demo.send('hello')
    // console.log(demo.logMessage)

    expect(demo.logMessage.calledOnce).to.be.true
    expect(demo.logMessage.firstCall.args[0]).to.be.equal('hello')

    demo.logMessage.restore()
  });

  // * 2. sinon.stub可以替换掉目标函数，并附加一些自定义行为
  it('测试使用 Sinon Stub', () => {
    var stub = sinon.stub(demo, 'logMessage')
    stub.withArgs('hello').returns('hello')
    demo.send('hello')
    expect(stub.returnValues[0]).to.equal('hello')
    stub.restore()
  });
}); 