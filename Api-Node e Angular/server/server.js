const app = require('./bin/app');
const variables = require('./bin/configurations/variables');


app.listen(variables.Api.port, () => {
    console.info(`Servidor rodando na porta ${variables.Api.port}.`);
  });
