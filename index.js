
import validator from './validator.js';
// # de prueba: 4213550075449933
// Solicitando información al ususario
const showInformation = document.getElementById('btr');
showInformation.addEventListener('click', function () {
  const num = document.getElementById('cardNumber').value;
  const validacion = validator.isValid(num);
  const success = document.querySelector('.exito');
  const failure = document.querySelector('.error');
  if(num === ''){
    alert('LLenar el campo vacio');
    return
  }
  if (validacion === true) { /* eL true es opcional*/ 
    success.textContent = 'Compra realizada';
    success.style.display = 'block';
    //failure.style.display = 'none';

  } else {
    failure.textContent = 'No se procesó el pago';
    failure.style.display = 'block';
    //success.style.display = 'none';
  }
}) 
showInformation.addEventListener('click', mask)
function mask(){
  const numberInput = document.getElementById('cardNumber');
  const valorNumberInput = numberInput.value;//123456
  const mascara = validator.maskify(valorNumberInput);//##3456
  console.log(mascara);
  numberInput.value = mascara;
  //console.log(mascara)
}
  
/* const mascara = validator.maskify(num); 
mascara = document.querySelector('.value');
//return mascara
console.log(validacion)*/
        
               
    

        
            
                
/*Como estaba inicialmente
    // Solicitando información al ususario
        const getInformation = document.getElementById('btr');
        getInformation.addEventListener('click', function () {
        const num = document.getElementById('cardNumber').value; // number o string? --> console.log(typeof num) === 'string'    
        const reverseNum = num.split('').reverse(); 
        // Forma #1
            reverseNum.forEach(function(n, index, array) {
                n = parseInt(n, 10);
                if(index % 2 != 0){
                    n = n * 2;
                    if(n >= 10){
                        function suma(n) {
                            let add = 0;
                            while (n > 0) {
                            let residue = n % 10;
                            add += residue;
                            n = parseInt(n/10);
                            };
                            return add;
                        }; 
                        n = suma(n); 
                    };
                }
                return array[index] = n;
            });
        // Sumando los elementos finales del array              
        let adittion = 0;
            for(i = 0;i < reverseNum.length; i++){
                adittion += reverseNum[i];
            };
            console.log(adittion)        
        })         
    

       /* Forma #2
        const transformedString = reverseNum.map(function(n) {
            n = parseInt(n, 10);
            if(i % 2 != 0){
                n = n * 2;
                if(n >= 10){
                    function sum(n) {
                        const residuo = n % 10;
                        const entero = parseInt(n/10);
                        const sum = residuo + entero;
                        return sum;
                    };
                    n = sum(n);
                }; 
            } 
            return n;   
        });    
        let sumatoria = 0;
        transformedString.forEach(numero => {
            sumatoria += numero;
        }

    console.log(sumatoria) */

// Personalización del mensaje por defecto
/*const mensajeValidacion = document.getElementById('numberCard');
  console.log(mensajeValidacion)
      mensajeValidacion.oninvalid = function (event) { 
        event.target.setcustomvalidity('Por favor ingresar solo números. ejm: 123456');
        } */
// P.D : No me sale el reemplazo del mensaje por defecto

  


