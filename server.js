// How NodeJS differs from vanilla JS
// 1) Node runs on a server - not in a browser (backend not frontend)
// 2) The console is the terminal window
// 3) global object instead of window object
// 4) Has Common Core modules
// 5) CommonJS modules instead of ES6 modules

const os = require('os')

console.log(os.type())
console.log(os.version())
console.log(os.homedir())