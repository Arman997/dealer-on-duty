function factorial (arg) {
    let result = arg;
    let fac = arg -1;
    for(let i = arg; i > 0; i--){
        if(fac !== 0){
            result = result * fac;       
        }
        fac --;
    }
    return result;
}
console.log(factorial(4));