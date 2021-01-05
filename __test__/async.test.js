import { TestScheduler } from 'jest';
import {getDataFromAPI} from '../promise';

describe('Probar Async / Await', () => {
    test('Realizar una petición a una API', async () => {
        const api = "https://rickandmortyapi.com/api/character";
        const getRick = "https://rickandmortyapi.com/api/character/1";
        await getDataFromAPI(api).then(data => {
            expect(data.results.length).toBeGreaterThan(0);
        });

        await getDataFromAPI(getRick).then(data => {
            expect(data.name).toEqual('Rick Sanchez');
        });
    });

    test('Realizando petición a API con error', async () => {
        const apiError = 'http://httpstat.us/404';
        const peticion = getDataFromAPI(apiError);
        await  expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
        });    

    test('Resuelve un Hola', async () => {
        await expect(Promise.resolve('Hola')).resolves.toBe('Hola');
        await expect(Promise.reject('Error')).rejects.toBe('Error');
        });
});