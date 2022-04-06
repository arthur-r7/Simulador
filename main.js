/* Primer desafio entregable

En este caso sera un simulador de descuento para dos prendas disponibles,
para efectos practicos sera un cupon de descuento por un 15% que le sera ofrecido al usuario
tan pronto ingrese a la pagina, ya dependera del usuario si decido utilziarlo o no*/


const camisa = 85000;
const pantalon = 120000;
let offer = 0;

function promoOffer(){
    alert('Tienes un cupon con un descuento de un 15% si deseas utilzarlo escribe "promo15" y se vera reflejado en tu compra');
    
    while (offer <1) {
        let cupon = prompt('Tienes algun cupon? De ser asi digitalo para redimirlo, de lo contrario digita cualquier caracter para continuar con tu compra');
        let producto = parseInt(prompt('Que prenda deseas adquirir? \n 1.Camisa 85.000 \n 2.Pantalon 120.000 \n 3.Abandonar '));
        if (cupon === 'promo15') {

         if (producto > 0 && producto <4) {
            switch (producto) {
                case 1:
                    porcentaje == camisa * 0.15;
                    descuento == camisa - porcentaje;
                    alert(`El valor a pagar es ${descuento} y se realizo un descuento por ${porcentaje}`)
                    break;

                case 2:
                    porcentaje = pantalon * 0.15;
                    descuento = pantalon - porcentaje;
                    alert(`El valor a pagar es ${descuento} y se realizo un descuento por ${porcentaje}`)
                    break;
                default:
                    alert('Valor incorrecto, intente nuevamente');
                    break;
            }
         }   
        }
    }
}





promoOffer();