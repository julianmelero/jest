/* Comparadores comunes*/

describe('Comparadores comunes', () => {
    const user = {
        name: "julián",
        lastname: "melero"
    }

    const user2 = {
        name: "julián",
        lastname: "melero"
    }

   test('Igualdad de elementos', () => {
        expect(user).toEqual(user2);
   });

   test('Desigual', () => {
    expect(user).not.toEqual(user2);
   });
});