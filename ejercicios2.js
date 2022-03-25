//Primer ejercicio
function mayorQue10(n){
    if(n>10){
        return 'Es mayor a 10';
    } else{
        return 'Es menor a 10';
    }
}

//Segundo ejercicio
function cualEsMenor(num1, num2){
    if(num1<num2){
        return num1;
    } else {
        return num2;
    }
}

//Tercer ejercicio
function cualEsMayor(n1, n2){
    if(n1>n2){
        return n1;
    } else if(n1==n2){
        return 'Son iguales';
    } else {
        return n2;
    }
}

//Cuarto ejercicio
function queEs(numero){
    if(numero > 0){
        return 'Positivo';
    } else if(numero < 0){
        return 'Negativo';
    } else {
        return 'Cero';
    }
}

//Quinto ejercicio
function parOImpar(number){
    if((number%2)==0){
        return 'Par';
    } else {
        return 'Impar';
    }
}

//Sexto ejercicio
function importeFinal(importe){
    if(importe < 1000){
        return importe;
    } else if(importe >= 1000 && importe < 5000){
        return importe*0.90;
    } else {
        return importe*0.82;
    }
}

//Septimo ejercicio
function cualDeTodosEsMayor(N1, N2, N3, N4){
    return Math.max(N1,N2,N3,N4);
}

//Octavo ejercicio
function cualDeTodosEsMenor(N1, N2, N3, N4){
    return Math.min(N1,N2,N3,N4);
}

//Noveno ejercicio
function mayorYMenor(vr1, vr2, vr3, vr4, vr5){
    return `El mayor es: ${Math.max(vr1,vr2,vr3,vr4,vr5)} y el menor es: ${Math.min(vr1,vr2,vr3,vr4,vr5)}`;
}

//Decimo ejercicio
function mayorA100(n1, n2, n3, n4){
    let mayores = [];
    if(n1 > 100){
        mayores.push(n1);
    } 
    if(n2 > 100){
        mayores.push(n2);
    }
    if(n3 > 100){
        mayores.push(n3);
    }
    if(n4 > 100){
        mayores.push(n4);
    }
    return mayores;
}

//Onceavo ejercicio
function cuantosSonMenoresA100(n1, n2, n3, n4){
    let menores = 0;
    if(n1 < 100){
        menores += 1;
    }
    if(n2 < 100){
        menores += 1;
    }
    if(n3 < 100){
        menores += 1;
    }
    if(n4 < 100){
        menores += 1;
    }
    return menores;
}

//Doceavo ejercicio
function tiempo(minutos){
    if(minutos <= 60){
        return minutos + 'minutos';
    } else {
        return (minutos/60).toFixed() + 'horas ' + minutos%60 + ' minutos';
    }
}
