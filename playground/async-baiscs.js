console.log('Starting app.')


setTimeout(()=>{
    console.log('Inside of call back');
}, 2000);

setTimeout(()=>{
    console.log('Second setTimeout');
}, 0);

console.log('Finishing App.')