function alphabetPosition(str) {
    let result = '';
    let asciiCode;
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);

      if(/^[A-Z]+$/.test(char)){
            asciiCode = char.charCodeAt(0);
            if(asciiCode >= 65 && asciiCode < 133){
                result += asciiCode - 64 + ' ';
            }

      }
      
      if (/^[a-z]+$/.test(char)) {
         asciiCode = char.charCodeAt(0);
            if(asciiCode >= 97 && asciiCode < 123){
                result += asciiCode - 96 + ' ';
            } 
      }
    }
  
    return result.trim(); 
  }
  
  console.log(alphabetPosition('Hello world'));
  
