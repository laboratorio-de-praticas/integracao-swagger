# 📘 Integração Swagger UI com Página Personalizada

Este projeto tem como objetivo apresentar a documentação de uma API utilizando o **Swagger UI** com uma **interface personalizada**, contendo **header e footer customizados**. Toda a documentação é servida por um servidor Node.js com Express.

---

## 📁 Estrutura do Projeto

```text
 ┣ 📂components
 ┃ ┗ 📜schemas.yaml
 ┣ 📂products
 ┃ ┣ 📂auth
 ┃ ┃ ┗ 📜v1_auth_login.yaml
 ┃ ┣ 📂cms
 ┃ ┃ ┣ 📂auth
 ┃ ┃ ┃ ┗ 📜api_auth_login.yaml
 ┃ ┃ ┣ 📂candidatos
 ┃ ┃ ┃ ┣ 📜api_candidatos_create.yaml
 ┃ ┃ ┃ ┣ 📜api_candidatos_get_all.yaml
 ┃ ┃ ┃ ┣ 📜api_candidatos_perm.yaml
 ┃ ┃ ┃ ┗ 📜api_candidatos_update.yaml
 ┃ ┃ ┗ 📂projetos
 ┃ ┃ ┃ ┣ 📜api_projetos_create.yaml
 ┃ ┃ ┃ ┣ 📜api_projetos_disable.yaml
 ┃ ┃ ┃ ┣ 📜api_projetos_get_active.yaml
 ┃ ┃ ┃ ┣ 📜api_projetos_get_all.yaml
 ┃ ┃ ┃ ┣ 📜api_projetos_get_id.yaml
 ┃ ┃ ┃ ┣ 📜api_projetos_get_turma.yaml
 ┃ ┃ ┃ ┗ 📜api_projetos_update_project.yaml
 ┃ ┣ 📂dash
 ┃ ┃ ┗ 📜v1_dashboards.yaml
 ┃ ┣ 📂vitrine
 ┃ ┃ ┗ 📜v1_vitrine.yaml
 ┃ ┗ 📂votacao
 ┃ ┃ ┗ 📜v1_votacao_eleicoes.yaml
 ┣ 📂public
 ┃ ┣ 📂imagens
 ┃ ┃ ┣ 📜logos-rodapé.png
 ┃ ┃ ┗ 📜logo_fatec.png
 ┃ ┣ 📂swagger-ui
 ┃ ┃ ┣ 📜swagger-ui-bundle.js
 ┃ ┃ ┣ 📜swagger-ui-standalone-preset.js
 ┃ ┃ ┗ 📜swagger-ui.css
 ┃ ┣ 📜index.css
 ┃ ┣ 📜index.html
 ┃ ┗ 📜swagger-initializer.js
 ┣ 📜.gitignore
 ┣ 📜Dockerfile
 ┣ 📜index.js
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┗ 📜swagger.yaml
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
