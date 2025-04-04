# 📘 Integração Swagger UI com Página Personalizada

Este projeto tem como objetivo apresentar a documentação de uma API utilizando o **Swagger UI** com uma **interface personalizada**, contendo **header e footer customizados**. Toda a documentação é servida por um servidor Node.js com Express.

---

## 📁 Estrutura do Projeto

```text
├── public/
│   ├── imagens/                  # Imagens utilizadas na personalização (ex: logos)
│   ├── index.html                # Página HTML com header, footer e Swagger embutido
│   ├── index.css                 # Estilos personalizados
│   ├── swagger-initializer.js   # Script de inicialização do Swagger UI
│   └── swagger-ui/              # Arquivos do Swagger UI (baixados de CDN)
│       ├── swagger-ui.css
│       ├── swagger-ui-bundle.js
│       └── swagger-ui-standalone-preset.js
├── swagger.yaml                 # Arquivo de especificação da API (OpenAPI)
├── index.js                     # Servidor Express que serve a documentação
├── package.json
└── .gitignore
```

---

## 🚀 Como Executar

1. Instale as dependências:
```bash
npm install
```

2. Inicie o servidor:
```bash
node index.js
```

3. Acesse no navegador:
- Página personalizada com Swagger: [http://localhost:3000/](http://localhost:3000/)

---

## 🛠️ Como Reutilizar o Projeto

Para usar em outro ambiente:

1. Clone o repositório:
```bash
git clone -b develop https://github.com/laboratorio-de-praticas/integracao-swagger.git
```

2. Instale as dependências e rode normalmente:
```bash
npm install
node index.js
```

3. Certifique-se de que os arquivos do Swagger UI estão dentro de `public/swagger-ui/`.  
Se não estiverem, baixe da [CDN oficial do Swagger UI](https://cdnjs.com/libraries/swagger-ui) e coloque nesta pasta:
- `swagger-ui.css`
- `swagger-ui-bundle.js`
- `swagger-ui-standalone-preset.js`

---

## ✨ Personalização

A página `index.html` pode ser editada para incluir logos, títulos, imagens, rodapé institucional etc.  
Os estilos podem ser modificados diretamente no arquivo `index.css`.

---

## 📝 Licença

Projeto desenvolvido para fins acadêmicos e institucionais.