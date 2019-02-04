# Instalação do sistema.

- Requisito para rodar o projeto nodeJS >= 8.
- Requisito para instalar o banco de dados docker >= 12. (opcional)

# Instalação banco de dados (opcional)
- Instalação do banco de dados postgres, se tiver o docker instalado na máquina é necessário que
a porta 5432 esteja liberada e que o comando "docker run --name postgresDB -p 5432:5432 -d -t kartoza/postgis"
seja rodado e finalizado corretamente. (opcional) - Obs: Essa imagem vem com o usuário a senha docker.
- Logo após instalar o banco de dados, é necessário criar um banco com nome que você desejar para
rodar o backend no meu caso foi teste-4all.

# Para rodar o backend.

- Entrar na pasta raiz (teste-4all/backend) e rodar o comando yarn ou npm install, para instalar
as dependências.
- Configurar o arquivo .env com as informações de acordo com a conexão do Banco de dados.
- Após a configuração do arquivo .env na raiz (teste-4all/backend), rodar o comando "npx sequelize db:migrate".
- Na raiz (teste-4all/backend) rodar o comando yarn start ou npm run start.

# Para rodar o frontend.

- Entrar na pasta raiz (teste-4all/front-end) e rodar o comando yarn ou npm install, para instalar
as dependências.
- Na raiz (teste-4all/front-end) rodar o comando yarn start ou npm run start.
