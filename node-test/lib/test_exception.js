class TestDemo {
  engine(fuel) {
    if(!(fuel === 'gas')) {
      throw new Error('not accept')
    }
  }
}
module.exports = TestDemo;