describe('Funciones con Strings', () => {
    const text = 'Un bonito texto';
    test('Debe contener un texto', () => {
        expect(text).toMatch(/bonito/);
    });
    test('No contiene un texto', () => {
        expect(text).not.toMatch(/feo/);
    });
});