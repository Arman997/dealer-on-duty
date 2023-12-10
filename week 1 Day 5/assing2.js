function removeDuplicate(str) {

    let arr = str.split(' ')
    
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                  arr.splice(i, 1);
                  i =0;   
            }
        }
    }
    return arr;
}


console.log(removeDuplicate('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'));