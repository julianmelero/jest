import { TestScheduler } from 'jest';
import {getDataFromAPI} from '../promise';

describe('Probando promesas', () => {
    test('Realizando petición a una URL', done => {
        const api = "https://rickandmortyapi.com/api/character";
        getDataFromAPI(api).then(data => {            
            expect(data.results.length).toBeGreaterThan(0);
            done();
        });

    });
    test('Resuelve un hola', () => {
        return expect(Promise.resolve('Hola!')).resolves.toBe('Hola!');
    });

    test('Rechaza con un error', () => {
        return expect(Promise.reject('Error :(')).rejects.toBe('Error :(');
    })
})