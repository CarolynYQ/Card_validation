
const validator = {
  //Métodos
  isValid : function(creditCardNumber) {
    // Código del método isValid 
    const reverseNum = creditCardNumber.split('').reverse(); 
    // Forma #1
    reverseNum.forEach(function(n, index, array) {
      n = parseInt(n, 10);
      if(index % 2 !== 0){
        n = n * 2;
        if(n >= 10){
          const sum = function(n) {
            let add = 0;
            while (n > 0) {
              const residue = n % 10;
              add += residue;
              n = parseInt(n/10);
            }
            return add
          } 
          n = sum(n) 
        }
      }
      return array[index] = n;
    });
    
    // Sumando los elementos finales del array              
    let adittion = 0;
    for(let i = 0;i < reverseNum.length; i++){
      adittion += reverseNum[i];
    }
    console.log(adittion)  
    return adittion % 10 === 0 /*? true : false*/
  },

  maskify : function(creditCardNumber) {
    // Código del método maskify
    //Forma #1
    const digits = creditCardNumber.split("");
    console.log(digits.fill('#',0,-4).join(''));
    return digits.fill('#',0,-4).join(''); 
  }

}
export default validator;





//Forma alternativa
//validator.isValid(creditCardNumber): creditCardNumber
//validator.maskify(creditCardNumber): creditCardNumber

/*Forma #2
        maskify: function (creditCardNumber) {
        const digits = creditCardNumber.split("");
          for (let i=0; i < digits.length -4; i++){
            digits[i] = "#";
          }
          creditCardNumber = digits.join('');
          console.log(digits.join(''));
          //alert(creditCardNumber);
          return creditCardNumber; 
        }*/
