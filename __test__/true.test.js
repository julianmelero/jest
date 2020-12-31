import {isFalse,isTrue,isNull,isUndefined} from '../true'

describe('Probar resultados nulos', () => {
    test('Es nulo', () => {
        expect(isNull()).toBeNull();
    });
});

describe('Probar resultados verdaderos', () => {
    test('Es verdadero', () => {
        expect(isTrue()).toBeTruthy();
    });
});

describe('Probar resultados falsos', () => {
    test('Es falso', () => {
        expect(isFalse()).toBeFalsy();
    });
});

describe('Probar resultados undefined', () => {
    test('Es undefined', () => {
        expect(isUndefined()).toBeUndefined();
    });
});