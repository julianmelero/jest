import {
    sumar, multiplicar, restar, dividir 
} from '../maths';

describe('Cálculos matemáticos', () => {
    test('Prueba de sumas', () => {
        expect(sumar(1,1)).toBe(2);
    });
    test('Prueba de multiplicación', () => {
        expect(multiplicar(2,2)).toBe(4);
    });
    test('Prueba de resta', () => {
        expect(restar(2,2)).toBe(0);
    });
    test('Prueba de division', () => {
        expect(dividir(6,2)).toBe(3);
    });

});

