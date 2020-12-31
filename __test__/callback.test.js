import {callbackHell} from '../callback';

describe('Probando callback', () => {
    test('Callback', done => {
        function otherCallback(data) {
            expect(data).toBe('¡Hola Jesteros!');
            done();
        }
        callbackHell(otherCallback);
    });
});

