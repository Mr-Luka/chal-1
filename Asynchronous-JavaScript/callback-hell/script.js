function getData(endpoint, cb) {     // cb- callback
    const xhr = new XMLHttpRequest();
    xhr.open('GET', endpoint);
    xhr.onreadystatechange = function (){
        if(this.readyState === 4 && this.status === 200) {
            cb(JSON.parse(this.responseText))
        }
    }

    setTimeout(()=> {
        xhr.send();
    }, Math.floor(Math.random()* 3000) + 1000);
}

getData('./movies.json', (data)=> {
    console.log(data);
    getData('./actors.json', (data)=>{
        console.log(data);
        getData('./directors.json', (data)=>{
            console.log(data);
        })
    })
});
/* When talking about callback hell, is this example, when we are passing in callback within callback
and so on and it always looks like tis triange/ stairs case.
Thats where the promises come in play.

*/