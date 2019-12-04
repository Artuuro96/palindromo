
//fuente: https://www.xarg.org/puzzle/project-euler/problem-36/

const calcular_palindromos = (limite) => {
    let suma = 0;
    let palindromos = [];

    for (var j = 0; j < 2; j++) {

        let palindromo = genera_palindromo(1, j);
        for (let i = 2; palindromo < limite; i++) {
            if (es_palindromo(palindromo, 10) && es_palindromo(palindromo, 2)) {
                suma += palindromo;
                palindromos.push(palindromo);
            }
            palindromo = genera_palindromo(i, j);
        }
    }
    return {
        suma,
        palindromos
    }
}

const es_palindromo = (numero, base) => {
    let numero_string = numero.toString(base);
    let lado_derecho = numero_string.length - 1;
    let lado_izquierdo = 0;

    while (lado_izquierdo < lado_derecho) {

        if (numero_string[lado_derecho] !== numero_string[lado_izquierdo]) {
            return false;
        }

        lado_izquierdo++;
        lado_derecho--;
    }
    return true;
}

function genera_palindromo(x, j) {
    var res = x;
    x >>= j;
    while (x > 0) {
        res = (res << 1) | (x & 1);
        x>>= 1;
    }
    return res;
}

module.exports = calcular_palindromos