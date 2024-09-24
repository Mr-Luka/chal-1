/* INSTRUCTIONS
- Create a constructor to create a Player object with a name
- Player should have a name as well as a LVL set to 1 by default and points set to 0 by default
- Create a method on the prototype called gainXp that takes in a number from 1-10
and adds it to the players points. If the current points are >= 10 then add 1 to the lvl
and decrement the points by 10
- Create another prototype method called describe that displays the players stats (name, lvl, points).
*/


function Player (name) {
    this.name = name;
    this.lvl = 1;
    this.points = 0;
}

Player.prototype.gainXp = function(xp) {
    this.points += xp;

    if( this.points >= 10) {
        this.lvl += 1;
        this.points -= 10;
    }

    console.log(this.describe()) // this automatically updates it, and hiding away describe
}

Player.prototype.describe = function () {
    return `${this.name} is level ${this.lvl} with ${this.points} experience points`;
}

let player1 = new Player('Luka');
let player2 = new Player('Bob');

player1.gainXp(7);
player1.gainXp(3);
player2.gainXp(15);
player2.gainXp(5);
player1.gainXp(13);

// console.log(player1.describe());
// console.log(player2.describe()); 