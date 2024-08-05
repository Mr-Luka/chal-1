// function getData(endpoint, cb) {     // cb- callback
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', endpoint);
//     xhr.onreadystatechange = function (){
//         if(this.readyState === 4 && this.status === 200) {
//             cb(JSON.parse(this.responseText))
//         }
//     }

//     setTimeout(()=> {
//         xhr.send();
//     }, Math.floor(Math.random()* 3000) + 1000);
// }

// getData('../Asynchronous-JavaScript/callback-hell/movies.json', (data)=> {
//     console.log(data);
//     getData('../Asynchronous-JavaScript/callback-hell/actors.json', (data)=>{
//         console.log(data);
//         getData('../Asynchronous-JavaScript/callback-hell/directors.json', (data)=>{
//             console.log(data);
//         })
//     })
// });

function getData(endpoint) {   
    return new Promise((resolve, reject)=> {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', endpoint);
        xhr.onreadystatechange = function (){
            if(this.readyState === 4) {
                if (this.status === 200){
                    resolve(JSON.parse(this.responseText))
                } else {
                    reject('Something went wrong')
                }
            }
        }
        setTimeout(()=> {
            xhr.send();
        }, Math.floor(Math.random()* 3000) + 1000);
    }) 
}

getData('../Asynchronous-JavaScript/callback-hell/movies.json')
.then((movies)=>{
    console.log(movies);
    return getData('../Asynchronous-JavaScript/callback-hell/actors.json');
})
.then((actors)=> {
    console.log(actors);
    return getData('../Asynchronous-JavaScript/callback-hell/directors.json')
})
.then((directors)=> {
    console.log(directors)
})
.catch((error)=> console.log(error))
