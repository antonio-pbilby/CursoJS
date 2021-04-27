# Babel e "Can I use"

## Inicialização do repositório

`npm init -y`

## Instalação do Babel

`npm install @babel/cli @babel/preset-en @babel/core`

`npm install --save-dev @babel/cli @babel/preset-en @babel/core`
Muda para dependência de desenvolvimento.

## Criação do `bundle.js`

Após criar o [`main.js`](main.js), pode-se utilizar o Babel para "portar" o código para uma versão mais antiga do EMS (JavaScript).
A partir de então, podemos definir que o `script` do HTML será o [`bundle.js`](bundle.js) no lugar do [`main.js`](main.js).

Para criar o [`bundle.js`](bundle.js):
`npx babel main.js -o bundle.js --presets=@babel/env`

## Automatização do Babel

Adicionar um novo valor para a tag `"script"` no arquivo [`pagkage.json´](pagkage.json):
`"babel": "babel ./main.js -o ./bundle.js --presets=@babel/env -w"`

Para executar no terminal:
`npm run babel`
