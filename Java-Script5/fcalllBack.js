function callback (){
    console.log('Timeout completed');
}

console.log('Start')
setTimeout(callback,3000); // wait 3 secods
console.log('')