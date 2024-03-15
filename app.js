// ``````````````````````````````DAY-1 1-26 min start````````````````````````````````

// 19 min onwards......................

// use this link for all code of node js course
// https://github.com/john-smilga/node-express-course


// ```````` 1st topic: Global variables in node.js `````````````

// from google: Global variables in NodeJS are variables that can be declared with a value,
// and which can be accessed anywhere in a program. The scope of global variables is not limited
// to the function scope or any particular JavaScript file. 
// It can be declared in one place and then used in multiple places.

// in node there is no window / window object eg query selector etc because there is no browser
// instead there is a global variable or there are globals concept in node 
// in simple, anywhere in your application u can access global variables

// some imp global variables:

// 1st: __dirname - path to current directory
// 2nd: __filename - file name
// 3rd: require - function to use modules
// 4th: module - info about current module/file
// 3rd and 4th will be covered in upcoming minutes 
// vvv imp 5th one:
// 5th: process - info about environment where the program is being executed

// executing 1st: __dirname

// ======== execute this =======
// console.log(__dirname);
// ======== execute this =======

// write node app.js in vs terminal to check output

// check other 4 too later by using console.log

// ======== execute this =======
// console.log(process);
// ======== execute this =======


// ``````````````````````````````DAY-1 1-26 min done (end)````````````````````````````````

// ``````````````````````````````DAY-2 26 min --- 1 hour 4 min (start)````````````````````````````````

// 26 min onwards........................

// ======== execute this =======
// setInterval(() => {
//     console.log('hello world')
// },1000)
// ======== execute this =======

// to stop setinterval use control+c
// to run code in terminal .js is not compulsory to write with file name 

//  ```````````` use up arrow key ``````````````

// `````till now we have studied global variables now lets move on...````

// ```````` 1st topic: Global variables in node.js `````````````


// ```````` 2nd topic: modules in node.js: import/export 1st example `````````````

// by default, every file in node is a module
// Google: A module in JavaScript is just a file containing related code.
// module is a encapsulated code in which we share only the data we want

// ======== execute this =======

// const ali = 'ali';
// const naeem = 'naeem';

// const student = (name) => {
//     console.log(`Hello there ${name}`)
// }
// student('ch');
// student(ali);
// student(naeem);

// ======== execute this =======


// ```````` 2nd topic: modules in node.js: import/export 1st example `````````````

// till now i have learned global variable topic and import/export modules topic with 4 examples/syntax 

// 4 examples file names are module-1-input,input2,input3...input 4 + module-1-output.js

// till now 1-53 min done

// ```````````````revising done 1-53 min Date: 12 march, 2024 tuesday```````````````

// 53 min....onwards: `````````````built-in modules of node``````````````

// `````````````there are 4 imp built-in modules in node (start)```````````````
// 1) OS 2) PATH 3) FS 4) HTTP

// ```` 1) OS module````

// ````from chatgbt````

// The os module provides information about the operating system 
// on which the Node.js process is running, such as platform, architecture, etc.
// Os module print information about the operating system

// ======== execute this =======

// console.log('Platform:', os.platform());
// console.log('Architecture:', os.arch());
// console.log('CPU Info:', os.cpus());

// // Print total system memory
// console.log('Total Memory (GB):', os.totalmem() / (1024 * 1024 * 1024));

// // Print information about the current user
// console.log('User Info:', os.userInfo());

// ======== execute this =======

// remember node module is not meant to replace the operating system itself but rather to provide a platform
// for building applications that can interact with the operating system.

// ````````from chatgbt``````

// ======== execute this =======

// const os = require('os');
// // info about current user
// const user = os.userInfo()
// console.log(user)

// without defining os userinfo will not response

// ======== execute this =======

// method which returns the system uptime in seconds

// 1st syntax/method by me

// ======== execute this =======

// const os = require('os');
// const upTime = os.uptime()
// console.log(upTime)

// ======== execute this =======

// 2nd syntax/method by sir 

// ======== execute this =======

// const os = require('os');
// console.log( `The system uptime is ${os.uptime()} seconds`);

// ======== execute this =======

// ======== execute this =======

// const os = require('os');
// const currentOS = {
//     name: os.type(),
//     release: os.release(),
//     totalMemory: os.totalmem(),
//     freeMemory: os.freemem(),
// }
// console.log(currentOS);

// ======== execute this =======

// ```````from chatbt``````

// uptime = time during which a machine, especially a computer, is in operation or is being used without any problems

// System uptime refers to the duration for which a computer system or a device has been continuously running
// without being restarted or powered off. It is a measure of how long the system has been operational 
// since the last reboot.

// ```````from chatbt``````


// ``````````````````````````````DAY-2 26 min --- 1 hour 4 min done (end)````````````````````````````````

// done revision 1 min - 1hour 4 min date: 12 march, 2024-tuesday


// ``````````````````````````````DAY-3 1 hour 4 min --- 1 hour 27 min  (start)````````````````````````````````

// ```` 2) PATH module````

// ======== execute this =======


// const path = require('path')
// console.log(path.sep)

// ======== execute this =======


// ======== execute this =======

// const path = require('path')
// const filePath = path.join('/subfolder', 'index.html')
// console.log(filePath);

// ======== execute this =======


// ======== execute this =======

// const path = require('path')
// const filePath = path.join('/subfolder', 'index.html')

// const base = path.basename(filePath)
// console.log(base);

// ======== execute this =======


// ======== execute this =======

// const path = require('path');
// const absolute = path.resolve(__dirname, '/subfolder', 'index.html')
// console.log(absolute);

// ======== execute this =======


// ````3) fs module (Sync = blocking)    start  `````

// ======== execute this =======

// const {readFileSync, writeFileSync} = require('fs');     // here we can also name fs or something else instead of {readFileSync}

// const first = readFileSync('./content/subfolder/first.txt','utf-8');
// const second = readFileSync('./content/subfolder/second.txt','utf-8');

// console.log(first);
// console.log(second);

// ======== execute this =======

// ======== execute this =======

// const {readFileSync, writeFileSync} = require('fs');
// const first = readFileSync('./content/subfolder/first.txt','utf-8');
// const second = readFileSync('./content/subfolder/second.txt','utf-8');
// writeFileSync('./content/subfolder/result-sync.txt', `here is the result : ${first}, ${second}`)

// for output run node app and then see new file is created in content folder....

// ======== execute this =======

// ======== execute this =======


// const {readFileSync, writeFileSync} = require('fs');
// const first = readFileSync('./content/subfolder/first.txt','utf-8');
// const second = readFileSync('./content/subfolder/second.txt','utf-8');
// writeFileSync('./content/subfolder/result-sync.txt', `here is the result : ${first}, ${second}`, {flag: 'a'})

// The { flag: 'a' } option indicates that you want to append the content to the file
// if it already exists. If the file doesn't exist, it will be created.

// ======== execute this =======



// ````` from chatgbt (start)``````

// In Node.js, the require() function is used to import modules. 
// When you use require('fs'), you are importing the built-in 'fs' (file system) module,
//  which provides functions for interacting with the file system in a synchronous or asynchronous manner.

// ````````remaining difference between syn and a-syn from notion````````


// "UTF-8" stands for "Unicode Transformation Format - 8-bit" and is a variable-width character encoding
//  that can represent every character in the Unicode character set.

// ```````` more on utf-8 from notion ``````````

// ````` from chatgbt (end) ``````

// ````3) fs module (Sync = blocking)   end  `````


// ````3) fs module (a-Sync = non-blocking)    start   `````

// ======== execute this =======

// const {readFile, writeFile} = require('fs')

// readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
// })

// when we don't write utf-8 it will return buffer

// ======== execute this =======


// ======== execute this =======

// const {readFile, writeFile} = require('fs')

// readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     const first = result;
//     readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile(
//             './content/subfolder/result-sync.txt',`Here is the result : ${first}, ${second}`,(err,result) => {
//                 if(err) {
//                     console.log(err)
//                     return
//                 }
//                 console.log(result)  // this will show undefined so u can also remove this from here
//             }
//         )

//     })
// })

// it's a callback hell


// ======== execute this =======

// ````3) fs module (a-Sync = non-blocking)    end   `````


// this includes content > subfolder > first.txt > result-sync.txt > second.txt


// ``````````````````````````````DAY-3 1 hour 4 min ---  1 hour 27 min  (end)````````````````````````````````


// ``````````````````````````````DAY-4 1 hour 27 min ---  2 hour 2 min  (start)````````````````````````````````

// `````differences between syn (blocking code) and a-syn (non-blocking code)

// ```1) checking sync code (time) start```

// ======== execute this =======

// const {readFile, writeFile} = require('fs')
// console.log('start');
// readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     console.log(result)
// })
// console.log('Done with this task');
// console.log('starting the next one');

// ======== execute this =======

// ```1) checking sync code (time) end```


// ```2) checking async code (time) start```

// ======== execute this =======

// const {readFile, writeFile} = require('fs')
// console.log('start')
// readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
//     if(err) {
//         console.log(err)
//         return
//     }
//     const first = result;
//     readFile('./content/subfolder/first.txt', 'utf8', (err, result) => {
//         if(err) {
//             console.log(err)
//             return
//         }
//         const second = result
//         writeFile(
//             './content/subfolder/result-sync.txt',`Here is the result : ${first}, ${second}`,(err,result) => {
//                 if(err) {
//                     console.log(err)
//                     return
//                 }
//                 console.log('done with this task')
//             }
//         )

//     })
// })
// console.log('starting the next one')


// ======== execute this =======


// ```2) checking async code (time) end```


// now remaining course will be based on reading/writing data to the database

// yes u can use callback but the code will be messy using it that's why promises and async await is more useful

// to be honest we will use async await in the remaining course because in my opinion it is easier to work with


// 4) `````````````HTTP module  (last module)  start``````````````````````

// we will cover some basics of http module now and the detail will be covered later

// with the help of http module i will show u some core features of node in action 

// ```````````imp point: http module is going to allow us to set up a web server`````````

// ======== execute this =======

// const http = require('http')

// const server = http.createServer((req,resp) => {       // here req and response are objects and req represents the incoming request and resp represents the response which we are giving that request back which was made from client which is requesting from the web browser your web page and u give it to the client 
//     resp.write('Welcome to our home page')
//     resp.end()
// });
// server.listen(5000)   // read details about this line from notion

// to see output  open google write http://localhost:5000/ and check it out cool...

// ======== execute this =======

// ======== execute this =======

// const http = require('http')

// const server = http.createServer((req,resp) => {    
//     console.log(req)
//     resp.write('Welcome to our home page')
//     resp.end()
// });
// server.listen(5000)

// when we write node app this console will not work but when we host
// on google and refresh that 5000 portal page then console will run within a second

// ======== execute this =======


// ======== execute this =======

// const http = require('http')

// const server = http.createServer((req,resp) => {    
//     if (req.url === '/') {
//         resp.end('Welcome to our home page')
//     }
//     if (req.url === '/about') {
//         resp.end('Here is our short history')
//     }
//     resp.end(
//         `<h1>Oops!</h1>
//         <p>We can't seem to find the page you are looking for </p>
//         <a href="/">back to home</a>
//         `
//     )
// });
// server.listen(5000)

// to see its output first run portal 5000 then after modifying  url 
// every time run node app in terminal to see the output of what u have write/give input in the url

// ======== execute this =======

// 4) `````````````HTTP module  (last module)  end``````````````````````

// `````````````there are 4 imp built-in modules in node (end)```````````````
// 1) OS 2) PATH 3) FS 4) HTTP

//  ``````````````end of base modules time: 1 hour 45 min````````````````

// when we install node npm (node package manager) automatically installs 

// npm enables to do three things
// 1) reuse our own code in other projects 
// 2) use code written by other developers 
// 3) share our own solutions with other developers as well

// npm project is hosted at npmjs.com
// as u know react has create react app package and it is hosted on the npm

// npm calls the reusable code a package

// a package is essentially a folder that contains a javascript code

// package , modules and dependencies all three are same

// when we install node we have access to npm global command

// npm - global command comes with node

// ======== execute this =======

// npm --version

// ======== execute this =======

// local dependency - can be used in a particular (unique) project

// ======== execute this =======

// npm i <packageName>

// ======== execute this =======
// check notion for details.

// global dependency - can be used in any project

// ======== execute this =======

// npm install -g <packageName>

// ======== execute this =======
// check notion for details.


//  u can also install packages globally using npx

// there is less and less need of setting something globally
// so that's why we focus on local dependencies first

// package.json - it's a manifest file which stores important information about project/package

// there are three ways to create package.json 

// 1) manual approach (create package.json  in the root, create properties etc)

// ======== execute this =======

// 2) npm init (step by step, u can enter press to skip something)

// ======== execute this =======

// check notion for details.

// ======== execute this =======

// 3) npm init -y (everything default)

// ======== execute this =======

// check notion for details.

// why we need package.json file?

// `````by chatgbt start ```` 

// Overall, the "package.json" file plays a central role in managing and 
// configuring Node.js projects, ensuring consistency, reproducibility, and ease of collaboration among developers.

// `````by chatgbt end ```` 

// node_modules = this is where all node dependencies are stored  (npm created it)
//  for example it has lodash dependency which we can create using npm i lodash

// if u try to install a package that is bigger that uses other dependencies
// for example

// ======== execute this =======

// npm i bootstrap

// now u can see bootstrap also using popper js

// ======== execute this =======

// so we need package.json to provide information about our project and inside it there is a very imp 
//  property of dependencies


// ======== execute this =======

// const _ = require('lodash');

// const items = [1,[2,[3,[4]]]]

// const newItems = _.flattenDeep(items);
// console.log(newItems)

// ======== execute this =======


// ``````````````````````````````DAY-4 1 hour 27 min ---  2 hour 2 min  (end)````````````````````````````````


// ``````````````````````````````DAY-5 2 hour 2 min ---  2 hour  min  (start)````````````````````````````````

// package.json is very important and so beneficial when we start sharing our project with other developers

// create .gitignore file then write /node_modules in it then go to terminal write git init then write git add . then write 