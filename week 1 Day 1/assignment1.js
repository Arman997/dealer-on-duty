function study (std, assingn) {     
    if (std === 1) {
        return assingn;
    }
    while (assingn >= 0 &&  assingn % std !== 0) {
        assingn -- 
    }
   return assingn;
}

console.log(study(3,11))