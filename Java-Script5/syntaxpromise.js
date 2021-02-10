let myPromise = new Promise(function(myResolve,myRejcet) {
// "Producing Code" (May take some time)
    myResolve(); // when successful
    myRejcet (); /// when error
});

// "Consuming Code" (Must wait for a fulfilled Promise)
myPromise.then(
    function(value) { /* code if successful */ } ,
    function(error) { /* code some error */ }
);