/*
 FS moduel allows us to use node.js to work with the local file system.
 so if we want to create a file, if we want to read from a file, create folders, move files around,
 then we can use this module

Write to a file / creating and writing to a file
There is an asynchronous version, which is the default
and there's synchronous version.
on top of that we can chose to use callbacks which is the default for asynchronous versions,
or we can use promises.
if you are gonna use promises its gonna be require('fs/promises)
*/

// const fs = require('fs');
// const fs = require('fs/promises')

// Write to a file //

// Asynchronous version with the call back, whitch is the default
// .         file name,   content for the file, and a callback(err)
// fs.writeFile('file1.txt', 'Hello World', (err)=> {
//     if(err) throw err;
//     console.log('File created')
// })
// When I run node fs, it will say in console: File created, and in a folder
// I will see a file called file1.txt


// Promise version
// fs.writeFile('file2.txt', 'Hello World 2')
// .then(()=> console.log('File created'))
// .catch((err)=> console.log(err))


// Sync version
// For the Synchronous version, you would use just the regular Fs
// fs.writeFileSync('file3.txt', 'Hello World 3'); // anything that is bellow this line, is not
// // gonna happen until this file has been created
// console.log('File Created')


// Promise version using Async await - What I would use personally 

const fs = require('fs/promises')
async function createFile(filename, content) {
    try {
        await fs.writeFile(filename, content);
        console.log("File Created")
    } catch(error) {
        console.log(error)
    }
}
// createFile('file4.txt', 'Hello World 4')

// Read from a File //
async function readFile(filename) { // readFile is our name of the function
    try {
        const data = await fs.readFile(filename, 'utf8'); // readFile is also a method on the fs object
        console.log(data);
    } catch (error) {   
        console.log(error)
    }
}

readFile('file1.txt');
readFile('file2.txt');
readFile('file3.txt');
readFile('file4.txt');


// Delete a file // - method for that is unlink()
async function deleteFile(filename) {
    try {
        await fs.unlink(filename);
        console.log(`File ${filename} deleted`)
    } catch(error) {
        console.log(error)
    }
}

deleteFile('file4.txt')


// Rename a File
async function renameFile(oldName, newName) {
    try {
        await fs.rename(oldName, newName) // rename() is a method on this object
        console.log(`File ${oldName} renamed to ${newName}`)
    } catch(error) {
        console.log(error);
    }
}
renameFile('file1.txt', 'file.txt') 
