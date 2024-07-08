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
x = dd.toString() // turns it into a string
x = dd.getFullYear() // get year
x = dd.getMonth() // get month its always gonna be 1 month behind, its index/0 based
x = dd.getMonth() + 1; // this way to fix it

x = dd.getDate(); // day of a month
x = dd.getDay()  // day of a week

x = dd.getHours() // get the hour military time
x = dd.getMinutes() // get minutes in an hour
x = dd.getSeconds();
x = dd.getMilliseconds() // get miliseconds in a second

// This way is usually the best when doing projects
x = `${dd.getFullYear()}-${dd.getMonth() + 1}-${dd.getDate()}`;


x = Intl.DateTimeFormat('en-US').format(dd); // date local
x = Intl.DateTimeFormat('default').format(dd); // local date

x = Intl.DateTimeFormat('default', {month: 'long'}).format(dd); // giving me current month: July
x = dd.toLocaleString('default', {month: 'short'}) // same thing, giving month, with short instead of July, its Jul

x = dd.toLocaleString('default', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/Los_Angeles',
}) // Monday July 8, 2024 at 4:45:08 PM
// . That is a newer way of how to do it, and better

console.log(x)