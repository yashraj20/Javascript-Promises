
const user = async () => {

  try {

const cleanroom = new Promise((resolve,reject)=> {
    const status = true;

    if(status){
        resolve('room cleaned');
    } else {
        reject('room not cleaned');
    }
})


const garbagecollect = new Promise((resolve,reject)=> {
    const status = false;

    if(status){
        resolve('garbage collected');
    } else {
        reject('failed');
    }
})

let promise1 = await cleanroom;

 console.log('success');

}

catch(e) {
    console.log(e);
}


const icecream = new Promise((resolve,reject)=> {
    const status = true;

    if(status){
        resolve('won icecream');
    } else {
        reject('failed');
    }
  })

 


//   }

//   catch(error) {
//     console.log(error);
//   }

}

user();


