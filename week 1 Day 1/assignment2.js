function minmax (str)   {
    str = str.toString();
    let arr = str.split('');
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= arr[i+1]){
              return "false"  
        }
    }  
    return "true"
}

console.log(minmax(12345))