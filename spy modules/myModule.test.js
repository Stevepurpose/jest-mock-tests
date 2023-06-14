//spy on module and function
const myModule=require('./myModule')
test('spy on module and function',()=>{

const spy=jest.spyOn(myModule,'multiply')
 
myModule.multiply(2,3)
expect(spy).toHaveBeenCalled()
spy.mockRestore()
})