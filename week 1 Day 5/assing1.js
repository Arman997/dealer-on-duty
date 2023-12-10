function maskify (str) {
    let arr = str.split('');
    let length = arr.length-4
    let result = [];
    for(let i = 0; i <= arr.length; i++){
    
            if(i < length){
                result[i] = '#'   
            }
            else{
                result[i] = arr[i]
            }   
    }
return result.join('');
}

console.log(maskify( "4556364607935616"));