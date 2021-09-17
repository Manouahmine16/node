const os=require('os')

//infos about current user

const user=os.userInfo()

console.log(user)

// method return the uptime of system in seconds

console.log(`the uptime of system is ${os.uptime} seconds`);

const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem:os.totalmem(),
    freeMem:os.freemem()
}

console.log(currentOS);