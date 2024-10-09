/* Path module is a core module that allows us to work with file and directory paths, and it can
be used to get the base name of a file, get the extension of a file, create absolute paths,
and much more.
One big reason this is useful is because the path separator among other things can vary
between operating systems.
*/

const path = require('path');

const myFilePath = 'subfolder/anotherfolder/index.js';

// basename() method - If we have a path like this myFilePath above, and we just need the base
// name of the file (index.js) then we would use basename(), it will disregard the rest of the path
const base1 = path.basename(myFilePath);
const base2 = path.basename(myFilePath, '.js') // if I dont want to get the extension - index
console.log(base1); // to run the file in terminal: node path // index.js
console.log(base2); // index


// extname() - This will get the extension of a file 
const ext = path.extname(myFilePath);
console.log(ext) // .js


// dirname()  - This will get the directory of a file / folder names
const dir = path.dirname(myFilePath);
console.log(dir); // subfolder/anotherfolder


// join() - creates file paths and it will create them correctly on whatever operating system
// clearner way to create file paths
const myPath = path.join('subfolder', 'anotherfolder', 'index.js'); // this takes as many arguments
// as you need, depending who many files u want 
console.log(myPath) // subfolder/anotherfolder/index.js


// resolve() - will create an aboslute path, and it takes in any number of arguments,
// and joins them together
const myPath2 = path.resolve('subfolder', 'anotherfolder', 'index.js');
console.log(myPath2); ///Users/luka/Desktop/traversy/chal-1/Node.js-core-modules/subfolder/anotherfolder/index.js
// resolve will give you the absolute path


// __dirname 
// enviroment variable. It tells you the absolute path of the directory containing the currently 
// executing file, so the file that you are in 
// whenever you are pointing to a file you are in , you should use __dirname instead of ./
console.log(__dirname) // /Users/luka/Desktop/traversy/chal-1/Node.js-core-modules


// __filename
console.log(__filename) // /Users/luka/Desktop/traversy/chal-1/Node.js-core-modules/path.js