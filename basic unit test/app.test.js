const add=require ('./app')

test('sum up',()=>{
const result=add(2,3)
expect(result).toBe(5)


})