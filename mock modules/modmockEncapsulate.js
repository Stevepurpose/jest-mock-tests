const modmock=require('./modmock')
//const {getSome}=require('./modmock') we can also destructure getsome from modmock module 
class sea{
    static gimmieFish(){
    return modmock.getSome()
   // return getSome()           use this if you destructured your import
    }
}

module.exports=sea