const {mainFunc}=require('./mockfunc')

//mock a callback function 
test('check x plus y value',()=>{

let mockCallback=jest.fn()
mainFunc(5,8,mockCallback)
expect(mockCallback).toBeCalled()
expect(mockCallback).toHaveBeenCalledWith(13)
})