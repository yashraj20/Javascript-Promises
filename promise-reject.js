const cleanroom = () => {
    new Promise((resolve,reject)=>{
    const status = true;

    if(status){
        resolve('room cleaned');
    } else {
        reject('room not cleaned');
    }
})
}

const garbagecollect = (message) => {
    new Promise((resolve,reject)=>{
    const status = false;

    if(status){
        resolve(message +'garbage collected');
    } else {
        reject('failed');
    }
})
}


const winicecream = (message)=> {
    new Promise((resolve,reject)=>{
    const status = true;

    if(status){
        resolve(message +'won icecream');
    } else {
        reject('failed');
    }
})
}




Promise.race([cleanroom(),garbagecollect(),winicecream()]).then(()=>{
    console.log('one of them is finished');
})


// Promise.all([cleanroom(),garbagecollect(),winicecream()]).then(()=>{
//     console.log('Finished All');
// })


// dependency promises

// cleanroom.then(()=>{
//     return garbagecollect();
// }).then(()=>{
//     console.log('finished');
// }).catch(()=>{
//     console.log('unable to process');
// })


// cleanroom.then((value)=>{
//     console.log('message:' +value);
// }).catch((msg)=>{
//     console.log('message:'+msg)
// })
