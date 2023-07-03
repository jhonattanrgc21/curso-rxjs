import { Observable } from "rxjs";

const intervalo$ = new Observable<number>(subs => {

    /*
        next: emite el siguiente valor
        error: captura los errores producidos mediante la emisin de datos
        complete: finaliza la emision y las instrucciones que se ejecutan despues de esto son ignorados
    */

    let count = 0;
    const interval = setInterval(() => {
        count++;
        subs.next(count);
    }, 1000);

    return ()=> {
        clearInterval(interval);
    }
});


const subs1 = intervalo$.subscribe({
    next: value => console.log('Valor del next: ', value),
    error: error => console.error('Error obs: ', error),
    complete: () => console.log('Completado')
});


const subs2 = intervalo$.subscribe({
    next: value => console.log('Valor del next: ', value),
    error: error => console.error('Error obs: ', error),
    complete: () => console.log('Completado')
});

const subs3 = intervalo$.subscribe({
    next: value => console.log('Valor del next: ', value),
    error: error => console.error('Error obs: ', error),
    complete: () => console.log('Completado')
});

subs1.add(subs2);
subs1.add(subs3);

setTimeout(() => {
    subs1.unsubscribe();
    /*subs2.unsubscribe();
    subs3.unsubscribe();*/
    console.log('Completado');

    
}, 3000)