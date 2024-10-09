/*
OS module - Operating system module.
It gives us information about the operating system, the platform, the user, things like
cpu, architecture, memory... so if you are building applications that are really integrated with
the system that it's running on then I will use this quite a bit.
Electron applications is where Iam gonna use it a lot.
Electron application is a framework where you can build javaScript, desktop applications
desktop apps with javaScript and VS code is actually build on Electron, with slack, postman ...
*/

const os = require('os');

// arch()
// it will return a string identifying the operating systems CPU architecture,
// and there are possible values: arm, arm 64, IA 32, X64, X32 ..
console.log(os.arch()); // arm64


// platform()
// it will return a string identifying the operating system and there's few possible values
console.log(os.platform()) // darwin - it means that you are on MAC
if(os.platform() === 'darwin') {
    console.log('You are on a Mac')
} else if (os.platform() === 'win32'){
    console.log('You are on a Windows')
} else {
    console.log('You are on a linux')
}
// You are on mac


// cpus()
// it will return an array of objects containing information about each logical CPU core
console.log(os.cpus())
/*
[{
    model: 'Apple M1 Pro',
    speed: 2400,
    times: { user: 40007020, nice: 0, sys: 31111290, idle: 117479110, irq: 0 }
  },
  {
    model: 'Apple M1 Pro',
    speed: 2400,
    times: { user: 39534510, nice: 0, sys: 28855190, idle: 120252730, irq: 0 }
  }, ...... and others]
*/


// freemem()
// it will return the amount of free memory in bytes
console.log(os.freemem()) //  489259008
console.log(`Free Memory: ${os.freemem() / 1024 / 1024 / 1024} GB`)

// totalmem()
console.log(os.totalmem())
console.log(`Total Memory: ${os.totalmem() / 1024 / 1024 / 1024} GB`);

// homedir - home directory
console.log(os.homedir()) // users/luka

// uptime
console.log(os.uptime())
const uptime = os.uptime();
const days = Math.floor(uptime / 60 / 60 / 24);
const hours = Math.floor(uptime / 60 / 60) % 24;
const minutes = Math.floor(uptime / 60) % 60;
const seconds = Math.floor(uptime) % 60;
console.log(`Uptime: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`);
// Uptime: 11 days, 6 hours, 7 minutes, 50 seconds

// hostname();
console.log(os.hostname()) // Lukas-MBP.lan