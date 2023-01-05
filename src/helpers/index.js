const calcularTotalPagar = (cantidad, plazo) => {

    let total;
    if (cantidad < 5000) {
        total = cantidad * 1.5
    } 
    if (cantidad >= 5000 && cantidad < 10000) {
        total = cantidad * 1.3;
    } 
    if (cantidad >= 10000 && cantidad < 15000) {
        total = cantidad * 1.2;
    } 
    if (cantidad >= 15000) {
        total = cantidad * 1.2;
    } 

    if (plazo === 6) {
        total *= 1.1;
    } else if (plazo === 12){
        total *= 1.2;
    } else {
        total *= 1.3;
    }
    
     return total;
}

export {
    calcularTotalPagar
}