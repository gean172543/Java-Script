let valuses1 = [ 'Apple' , 1 , false ] 
let valuses2 = [ 'Fries' , 2 , true ] 
let valuses3 = [ 'Mars' , 9 , 'Apple' ] 

//typtof str='earth'== tyupeof str2 = 22

function comPare(set1,set2) {

    let result = []

    for (let index = 0; index < set1.length; index++) {
        
        if (typeof set1[index] === typeof set2[index]) {
            result[index] = true
        }
        
        else {
            result[index] = false
        }

    }
    return  result ;
}

console.log(comPare(valuses2,valuses3));
    



