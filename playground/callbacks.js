var getUser = (id , callback) => {
    var user = {
        id :101,
        name :'Vinay'
    };
    setTimeout(()=>{
        callback (user);
    },3000);   
};

getUser(101, (userObject)=> {
    console.log(userObject);
});