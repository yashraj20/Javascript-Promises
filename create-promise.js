const keepwords = true;
promise = new Promise( (resolve,reject) => {
    if(keepwords){
        resolve('promise promise');
    } 
    else {
        reject('promise broken');
    }

});

console.log(promise);

