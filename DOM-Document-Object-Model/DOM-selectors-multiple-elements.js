// querySelectorAll()

const listItems = document.querySelectorAll(".item");
// It gives us a Node List, and a Node List is an Array-like structure, much like an HTML collection
// we saw in the past. The difference is you can use high order array methods on a NodeList
// But you cant on HTML collection. With HTML collection, I would have to convert it to an array

console.log(listItems) // NodeList(4) [li.item, li.item, li.item, li.item]
console.log(listItems[1]) // This is getting me the second list item: <li class='item'>...</li>
console.log(listItems[1].innerText) // Orange Juice

// listItems.style.color = 'red'   - This will NOT work, becasue I am trying to access Style
// on a Node List, style is for a specific element, so If I wanted to change all of them
// I could use .forEach() loop

listItems.forEach((item, index)=> {
    item.style.color = 'red'; // colors all item lists into red
    
    if (index === 1){
        item.remove() // it removes one item
    } 
    if(index === 0) {
        // item.innerText = 'Oranges' // It changed the text Into Oranges, however:
        // it also removed the X sign for delete, becasue that item list also includes
        // the Delete button with that X logo inside, so what we can do is:
        item.innerHTML = `Oranges
          <button class="remove-item btn-link text-red">
            <i class="fa-solid fa-xmark"></i>
          </button>`;

    }
}) 