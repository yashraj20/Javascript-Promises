const user = async () => {

const loadform = new Promise((resolve,reject)=> {
     setTimeout( () => resolve('Form Loaded successfuly'),2000)
});

const userdata = new Promise((resolve,reject)=> {
    return resolve('User Data submitted');
});

const verify = () => {
    console.log('Verified')
}


let form = await loadform;
let data = await userdata;
const result = verify();

return result;

}

user()




