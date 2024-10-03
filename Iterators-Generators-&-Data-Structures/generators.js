/*
Generators are used to create iterators, so we can kind of to the same thing but in a much easier way.
Generators are actually functions that can be paused and resumed.
So there is a keyword we can use called YIELD and that will actually kind of pause the function
and then we can use it just like we used iterators where we would call .next and then it would 
show the first value, we called .next again and it would show the next value,
thats where we use the Yield.
Generators are iretable

adding * (asterisk) lets javaScript know that this is a generator 
*/

function* createTeamIterator(teams){
    for (let i = 0; i < teams.length; i++){
        yield teams[i]
    }
};
/* All we are doing is basically pausing the function wherever we want with yield and returning
from there, whatever we want as the value, which in this case is that specific team that is
coming out as the value.
We dont have to manually create next, like we did in iterators.js
Generators are iretable
*/

const teams = ['Red Sox', 'Yankees', 'Astros', 'Dodgers'];

const iterator = createTeamIterator(teams);
// console.log(iterator.next()) // Object {value: 'Red Sox', done: false}
// console.log(iterator.next()) // Object {value: 'Yankees', done: false}
// console.log(iterator.next()) // Object {value: 'Astros', done: false}
// console.log(iterator.next()) // Object {value: 'Dodgers', done: false}
// console.log(iterator.next()) // Object {value: 'undefined', done: true}

// Generators are iretable:
for( const team of createTeamIterator(teams)){
    console.log(team)
}

// We can use Spread Operator as well:
console.log([...createTeamIterator(teams)]) // ['Red Sox', 'Yankees', 'Astros', 'Dodgers']

// We can use destructuring:
const [first, second, third] = createTeamIterator(teams);
console.log(first, second, third) // Red Sox, Yankees, Astros