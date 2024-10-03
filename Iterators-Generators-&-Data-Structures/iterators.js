/*
Iterators are objects that definea sequence and potentially a return value upon completion.
These are objects that implement the iterator protocol by having a next method.
That Next method returns an object with two specific properties, so its gonna look like this:
{ value: 1, done: false};
The value is the value that we want to return, it can be anything, whatever we are iterating and
outputing as a value, and the Done is a boolean that indicates whether
we are done or not. If we are done, then the done property is true, otherwise it
is false. So, we can use this to create our own iterators.

Two ways:
*/

// Without Symbol.iterator :

/* We have some teams here and we want to iterate through these baseball teams,
we need to have Next method - next()
*/
// const app = {
//     nextIndex: 0,
//     teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
//     next(){
//         if(this.nextIndex >= this.teams.length){
//             return {done: true }
//         }

//         const returnValue = {value: this.teams[this.nextIndex], done: false}
//         this.nextIndex++;
//         return returnValue;
//     }
// }
// console.log(app.next()) // value: 'Red Sox', done: false
// console.log(app.next()) // value: 'Yankees', done: false
// console.log(app.next()) // value: 'Astros', done: false
// console.log(app.next()) // value: 'Dodgers', done: false
// console.log(app.next()) // { done: true }
/* done: true, becasue we are done iterating through these teams.
Even though this is an iterator, it is not iterable and we can test that by doing a for..of loop
*/
// for(const team of app ){
//     console.log(team)
// } // It will show an error: app is not iterable
// What we can do is implement: Symbol.iterator
// which is a special built-in iterator
// Doing the same thing with app object, just with Symbol.iterator:

const app = {
    teams: ['Red Sox', 'Yankees', 'Astros', 'Dodgers'],
    [Symbol.iterator]: function () {
        let nextIndex = 0;
        return {
            next: () => {
                return nextIndex <= this.teams.length
                ? {value: this.teams[nextIndex++], done: false}
                : {done: true}
            }
        }
    }
};

const iterator = app[Symbol.iterator]();
// console.log(iterator.next().value); // Red Sox
// console.log(iterator.next().value); // Yabkees
// console.log(iterator.next().value); // Astros
// console.log(iterator.next().value); // Dodgers
// console.log(iterator.next().value); // undefined or iterator.next()  - {done: true}

for(const team of app ) {
    console.log(team)
} // now it will iterate and show all of them one by one
// there is a diference between Iterator and iterable


