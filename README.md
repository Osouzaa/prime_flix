

Prime_Flix
Prime_Flix é um projeto de aplicativo web construído em ReactJS que permite aos usuários explorar filmes e programas de TV usando a API do The Movie Database (TMDb).

Pré-requisitos
Antes de começar, certifique-se de ter instalado:

Node.js
Yarn (ou npm)
Instalação
Clone o repositório do GitHub:
bash
Copy code
git clone https://github.com/seu_usuario/prime_flix.git
Acesse o diretório do projeto:
bash
Copy code
cd prime_flix
Instale as dependências usando Yarn:
bash
Copy code
yarn install
Configuração da API
Para usar a API do TMDb, você precisará de uma chave de API. Siga as instruções em https://www.themoviedb.org/documentation/api para obter sua chave.

Depois de obter sua chave de API, crie um arquivo .env na raiz do projeto e adicione sua chave da seguinte forma:

env
Copy code
REACT_APP_TMDB_API_KEY=SuaChaveDeAPIAqui
Executando o projeto
Com todas as dependências instaladas e a chave da API configurada, você pode executar o projeto. Use o seguinte comando:

bash
Copy code
yarn start
Isso iniciará o aplicativo em modo de desenvolvimento. Abra http://localhost:3000 para visualizá-lo no navegador.

Contribuindo
Contribuições são bem-vindas! Se você encontrar problemas ou tiver sugestões de melhorias, sinta-se à vontade para abrir uma issue ou enviar um pull request.

Licença
Este projeto está licenciado sob a MIT License.

