// querySelectorAll()

const listItems = document.querySelectorAll(".item");
// It gives us a Node List, and a Node List is an Array-like structure, much like an HTML collection
// we saw in the past. The difference is you can use high order array methods on a NodeList
// But you cant on HTML collection. With HTML collection, I would have to convert it to an array

console.log(listItems) // NodeList(4) [li.item, li.item, li.item, li.item]
console.log(listItems[1]) // This is getting me the second list item: <li class='item'>...</li>
console.log(listItems[1].innerText)