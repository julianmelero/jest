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
});