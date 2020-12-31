import { TestScheduler } from 'jest';
import {arrayFruits, arrayColors} from '../arrays';

describe('Comprobaremos que existe un elemento', () => {
    test('Contiene banana', () => {
        expect(arrayFruits()).toContain('banana');
    });
    test('No contiene platano', () => {
        expect(arrayFruits()).not.toContain('platano');
    });
    test('Saber tamaño', () => {
        expect(arrayFruits()).toHaveLength(6);
    });
});