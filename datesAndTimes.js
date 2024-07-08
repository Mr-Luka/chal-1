let d;

d = new Date();  // its an Object (typeof d) = object

d = d.toString() // becomes a string

d = new Date(2021, 1, 10) // month is index based, so 1 will be Feb.

d = new Date(2023, 0, 10, 12, 30, 0) // Year, month, day, hour, minutes, sec

d = new Date('2021-07-10'); // If i do it as a string, that it wont be index based month

d = new Date(`2021-07-10T12:30:00`); // adding time to the date
d = new Date(`07/10/2021 12:30:00`); // same

// Time in javaScript is always expressed with miliseconds
d = Date.now() // 1720479..... miliseconds and always changing

d = new Date('07-10-2022 12:30:00');
d = d.getTime(); // this is to get the exact milisecond of that date and time
d = d.valueOf() // also getting the exaxt millisecond of the date now

d = new Date(1657481400000) // to get the time stamp from seconds into a date

d = Math.floor(Date.now() / 1000); // turn it into milliseconds


//  DATE OBJECT METHODS

let x;
let dd = new Date(); // initializing date into dd variable
