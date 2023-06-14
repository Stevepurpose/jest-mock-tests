
const sea=require('./modmockEncapsulate')

//we mock the modemock module, which plays the role of an external dependency,something axios will be in async

jest.mock('./modmock',()=>({
 
getSome:jest.fn().mockReturnValue('shark')

}))


test('sea.gimmieFish to return shark',()=>{

expect(sea.gimmieFish()).toEqual('shark')

})