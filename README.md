# NLW Valoriza

## Regras

- Cadatro de Usuário

  [ x ] Não é permitido cadastrar mais de um usuário com o mesmo e-mail

  [ x ] Não é permitido cadastrar usuário sem e-mail

- Cadastro de TAG

  [ x ] Não é permitido cadastrar mais de uma tag com o mesmo 
  
  [ x ] Não é permitido o cadastro por usuário que não sejam administadortes

- Cadastro de elogios

  [ ] Não é permitido um usuário cadastrar um elogio para si

  [ ] Não é permitido cadastrar elogios para usuários inválidos

  [ ] O usuário precisa estar autenticado na aplicação


# Dependencies

- yarn add typeorm
- yarn add reflect-metadata
- yarn add sqlite3


```
yarn init -y

yarn typeorm migration:create -n CreateUsers

```