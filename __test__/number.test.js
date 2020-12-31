import {numbers} from '../numbers';

describe('Comparar números', () => {
    test('Mayor que', () => {
        expect(numbers(2,2)).toBeGreaterThan(3);
    });
    test('Mayor que o igual', () => {
        expect(numbers(2,2)).toBeGreaterThanOrEqual(3);
    });
});