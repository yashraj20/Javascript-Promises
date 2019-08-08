const keepwords = true;
promise = new Promise((resolve,reject) => {
    setTimeout( ()=> {
      if(keepwords){
         resolve({
             message : 'promise kept',
             code : 200
         })
      } else {
          reject({
              message : 'promise Broken',
              code : 100
          })
      }
    },1000)
})

console.log(promise);