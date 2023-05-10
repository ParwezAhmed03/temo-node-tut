const names=require('./2-names')
// console.log(names)
const sayHi=require('./3-utils')
// n////////console.log(sayHi)
const data=require('./4-alternative-flavors')
require('./5-mindGranade')

// sayHi('Parwez')
// sayHi(names.peter)
// sayHi(names.john)

//--->> os modules
const os=require('os')

// info about user
const user=os.userInfo()
//console.log(user);

//methods returns the systems uptime in second
console.log(`the system uptime is ${os.uptime} seconds`);


//system info
const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem:os.freemem(),
}
console.log(currentOS)