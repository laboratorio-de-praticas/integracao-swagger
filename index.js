const express = require('express');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');

const app = express();
const PORT = 3000;

// Servindo a pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Servindo a pasta "Products" para que o Swagger encontre os arquivos YAML
app.use('/products', express.static(path.join(__dirname, 'products')));
app.use('/components', express.static(path.join(__dirname, 'components')));

// Servindo arquivos do Swagger UI corretamente
app.use('/swagger-ui', express.static(path.join(__dirname, 'public', 'swagger-ui')));

// Servindo o arquivo swagger.yaml
app.use('/swagger.yaml', express.static(path.join(__dirname, 'swagger.yaml')));

// Carregando a documentação do Swagger
const swaggerDocument = YAML.load(path.join(__dirname, 'swagger.yaml'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Página inicial personalizada do Swagger
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar o servidor
app.listen(PORT, () => {
    console.log(`Swagger UI rodando em: http://localhost:${PORT}`);
});
