import { Observable, Subject } from "rxjs";

const intervalo$ = new Observable<number>(subs => {

    /*
        next: emite el siguiente valor
        error: captura los errores producidos mediante la emisin de datos
        complete: finaliza la emision y las instrucciones que se ejecutan despues de esto son ignorados
    */

    const intervalID = setInterval(() => {
        subs.next(Math.random());
    }, 1000);

    return () => {
        clearInterval(intervalID);
        console.log('Intervalo destruido');
    }
});

const subject$ = new Subject();
const intervalSubject = intervalo$.subscribe(subject$);


const subs1 = subject$.subscribe({
    next: value => console.log('Valor del next: ', value),
    error: error => console.error('Error obs: ', error),
    complete: () => console.log('Completado')
});


const subs2 = subject$.subscribe({
    next: value => console.log('Valor del next: ', value),
    error: error => console.error('Error obs: ', error),
    complete: () => console.log('Completado')
});

setTimeout(()=> {
    subject$.next(10);
    subject$.complete();
    intervalSubject.unsubscribe();

}, 3500)