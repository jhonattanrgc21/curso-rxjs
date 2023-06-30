import { Observable } from "rxjs";

const obs$ = new Observable<string>(subs => {

    /*
        next: emite el siguiente valor
        error: captura los errores producidos mediante la emisin de datos
        complete: finaliza la emision y las instrucciones que se ejecutan despues de esto son ignorados
    */

    subs.next('Hola');
    subs.next('Mundo');

    subs.next('Hola');
    subs.next('Mundo');

    /*const a = undefined
    console.log(a.nombre)*/
    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});

obs$.subscribe({
    next: value => console.log('Valor del next: ', value),
    error: error => console.error('Error obs: ', error),
    complete: () => console.log('Completado')
});