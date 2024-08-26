let start;
let done = false;

function step(timestamp){
    if (start === undefined) {
        start = timestamp;
    }

    const elapsed = timestamp - start;

    if(elapsed > 2000) {
        done = true;
    }
    if(done) {
        return;
    }
    console.log(elapsed)

    requestAnimationFrame(step); // its gonna keep console loging
}

requestAnimationFrame(step);