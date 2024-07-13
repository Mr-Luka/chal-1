//  SWITCH STATEMENTS

const d = new Date(2022, 1,10, 8,0,0); // remember time is index based, so it will be Februrary
const month = d.getMonth(); // 1
const hour = d.getHours();


/* Switches are most commonly used with immediate values, meaning we are checking the month
directly, you can use it with ranges.
If I have 5 or 6 cases of Else IF, that is a good case for a Switch statements

*/

switch(month) {
    case 1:
        console.log("January");
        break;
    case 2: 
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    default:
        console.log("It is not Jan, Feb or March");
}



switch (true) {
    case hour < 12:
        console.log("Good Morning");
        break;
    case hour < 18:
        console.log("Good Afternoon");
        break;
    default:
        console.log("Good Night");
}