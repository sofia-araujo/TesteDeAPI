const axios = require('axios')

async function Api() {
  const response = await axios.get('https://api.chucknorris.io/jokes/random');
  return response.data;
}

/* global test, expect */
test('Verifica dados obtidos da API', async () => {
  const dados = await Api();
  expect(dados.value).toBeDefined();
});
