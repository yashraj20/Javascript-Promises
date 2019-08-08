const promise = new Promise((resolved,rejected) => {
    mysavings = 10000;
    product = 20000;

    if(mysavings > product) {
       resolved({
          message : 'product purchased',
          status  : 'success' 
       })
    } else {
        rejected({
            message : 'Unable to buy the product',
            status  : 'failed'
        })
    }
})


promise.then( (value) => {
    console.log('purchased', JSON.stringify(value));
})

promise.catch( (reason) => {
    console.log('Insufficient Balance' , reason);
})

promise.finally( ()=> {
    console.log('i love my present phone too.. ');
}) 
