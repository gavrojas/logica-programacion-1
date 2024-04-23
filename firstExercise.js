//SA-LPD1 - Práctica de Comparación de Números
//22 abril, by Gabriela Rojas

let n1, n2, n3, mayor, menor, centro, repetir, numRepetidor;

n1 = parseInt(prompt("Escriba un primer número"));
n2 = parseInt(prompt("Escriba un segundo número"));
n3 = parseInt(prompt("Escriba un tercer número"));

//Validar número mayor, centro y menor. 

// if (n1 < n3 && n2 < n3 ) {
//     mayor = n3;
//     if (n1 < n2) {
//         menor = n1;
//         centro = n2;
//     }
//     else {
//         menor = n2;
//         centro = n1;
//     }
// }

// else if (n1 < n2 && n3 < n2){
//     mayor = n2
//     if (n1 < n3) {
//         menor = n1;
//         centro = n3;
//     }
//     else {
//         menor = n3;
//         centro = n1;
//     }
// }

// else {
//     mayor = n1
// }

//Validar repeticiones 
if (n1 === n2 && n1 === n3) {
    repetir = 3;
    numRepetidor = n1;

}

else if (n1 === n2) {
    repetir = 2;
    numRepetidor = n1;
    if (n1 < n3 ) {
        mayor = n3;
        menor = n1;
        centro = n2;
    }
    else {
        mayor = n1;
        menor = n3; 
        centro = n2; 
    }
}

else if (n1 === n3) {
    repetir = 2;
    numRepetidor = n1;
    if (n1 < n2 ) {
        mayor = n2;
        menor = n1;
        centro = n3;
    }
    else {
        mayor = n1;
        menor = n2; 
        centro = n3; 
    }
}

else if (n2 === n3) {
    repetir = 2;
    numRepetidor = n2;

    if (n2 < n1 ) {
        mayor = n1;
        menor = n2;
        centro = n3;
    }
    else {
        mayor = n2;
        menor = n1; 
        centro = n3; 
    }
}


else {
    if (n1 < n3 && n2 < n3 ) {
    mayor = n3;
    if (n1 < n2) {
        menor = n1;
        centro = n2;
    }
    else {
        menor = n2;
        centro = n1;
    }
    }   

    else if (n1 < n2 && n3 < n2){
        mayor = n2
        if (n1 < n3) {
            menor = n1;
            centro = n3;
        }
        else {
            menor = n3;
            centro = n1;
        }
    }

    else {
        mayor = n1
    }
    repetir = 0;
    numRepetidor = "Ninguno"
}

if (numRepetidor > 0 ){
    alert("Repetiste el número: " + numRepetidor + ", " + repetir + " veces. \n\n Oprima aceptar para continuar.");
}
else {
    alert("No escribió números repetidos.");
}

alert("Los números que ingresaste organizados de mayor a menor son: \n" + mayor + ", " + centro + ", y " + menor +"\n\n y organizados de menor a mayor son: \n" + menor + ", " + centro + ", y " + mayor );
