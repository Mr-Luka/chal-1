/*
If we use: this
within the global scope or within a regular function, then this is gonna pretain to the window
object.
If we use it within a constructor function or a class, then we can use it to access properties
and methods for that object. It pretains to the instance of that class or of that constructive
function.
If we use it in a an event listener, then this is gonna point to the element that the event was
triggered on.
Becasue there is so many different situations where this means something different, JavaScript
gives us these methods that we can use to manually define what the, this keyword word means
or what it points to and those three methods are: 
call() bind() and apply()

bind()
will allow us to set the value of this manually and it returns a new function where this value
is bound to whatever the value is that we pass in.
One common case for this is when we have callback functions, because callback functions are just
regular functions. 



Common place to put my event listener when you are using classes is in the constructor, 
because it runs automatically
*/


class App {
    constructor() {
        this.serverName = 'localhost'

        document.querySelector('button')
        .addEventListener('click', this.getServerName.bind(this)); // localhost
    }

    getServerName() {
        console.log(this.serverName);
    }
}

const app = new App();
// app.getServerName(); // Outputs: localhost