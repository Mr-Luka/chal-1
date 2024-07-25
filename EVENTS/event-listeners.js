const clearBtn = document.querySelector('#clear');
// JavaScript Event Listener

// clearBtn.onclick = function () {
//     alert('clear items')
// }
// This way is ok, but not recommended


// Recommended way, most modern: addEventListener()
clearBtn.addEventListener("click", ()=> alert('clear items'))
clearBtn.addEventListener("click", ()=> console.log('clear items'))
