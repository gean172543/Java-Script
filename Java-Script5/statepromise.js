const promise = new Promise((resole,reject) => {
    const sre = true ;
    // An asynchronous operation.
    if(res){
        resolve('Resolved!');
    } else{
        reject(Error('Fatal Error'));
    }
});

promise.then(
    (res) => console.log(res),
    (err) => console.log(err)
);