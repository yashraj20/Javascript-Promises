const purchase = async () => {

  const plan = new Promise((resolve,reject) => {
      setTimeout( () => {
          let savings = false;
          if(savings) {
            resolve('I have enough money to buy an phone')
          } else {
              reject('I dont have enough money to buy phone');
          }
          
      },2000)
  });

  let result ;
  try {
    result = await plan;
  }
  catch(e) {
      result = await plan;
  }

  return result; 
}

purchase().then((m)=>{ 
    console.log(m);
})