const user = async () => {

    try {

        const loadform = new Promise((resolve,reject)=> {
             let status = false;

             if(status) {
                 resolve('Promise one success');
            } else {
                reject('Promise one fails');
            }
       });
       
       const userdata = new Promise((resolve,reject)=> {
           return resolve('User Data submitted');
       });

        let promise1 = await loadform;
        
    }

    catch(e) {
        console.log(e);
    }
    
    
    }
    
    user()
    
    
    
    
    
