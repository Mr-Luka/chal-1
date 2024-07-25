const clearBtn = document.querySelector('#clear');
// JavaScript Event Listener

function onClear(){
    alert('clear items')
}


// clearBtn.onclick = function () {
//     alert('clear items')
// }
// This way is ok, but not recommended


// Recommended way, most modern: addEventListener()
// clearBtn.addEventListener("click", ()=> alert('clear items'))
// clearBtn.addEventListener("click", onClear)
// This way is I can have as many event listeners as I want.

// setTimeout(()=> clearBtn.removeEventListener('click', onClear), 5000);
// after 5 seconds, this event listener is being removed


// setTimeout(()=> clearBtn.click(),5000); // it clicks the button after 5 seconds


// Remove all the items from the shopping list
// function removeListItems() {
//     const listItems = document.querySelectorAll('.item');
//     listItems.forEach(item=> item.remove())
// }
// clearBtn.addEventListener("click", removeListItems);


// function removeLi(){
//     document.querySelectorAll('.item').forEach(li=>li.remove())
// }

// clearBtn.addEventListener('click', removeLi);