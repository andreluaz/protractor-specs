# protractor-specs
Usando o Protractor Specs em sites não Angular.

## Pré-requisito

É necessário a instalação do node e npm, para instalar digite em seu terminal:

```
brew install node
```

## Clonando o repositório

Clone o Repositório:

```
git clone https://github.com/andreluaz/protractor-specs.git
```

## Instalação das dependências

Após a clonagem do repositório digite:

```
npm install
```

Isto fará a instalação das dependências necessárias para a execução dos testes.

## Execução dos Testes

Para executar os testes, abra uma nova aba no terminal e digite:

```
protractor protractor.conf.js
ou
npm test
```
## Arquitetura do Projeto

```
├── README.md
├── specs                               - As specs dos testes
│      └── americanas.spec.js
├── node_modules                        - Dependências instaladas
├── package-lock.json                   - Versões das dependências instaladas
├── package.json                        - Dependências usada no projeto
├── protractor.conf.js                  - Configuração para a execução do protractor
└── results.json                        - Resultado da execução
```

## Troubleshooting:

Caso execute o comando:

```
npm test
```

E uma mensagem de erro ocorra como descrito abaixo:

```
[17:11:25] E/direct - Error code: 135
[17:11:25] E/direct - Error message: Could not find update-config.json. Run 'webdriver-manager update' to download binaries.
[17:11:25] E/direct - Error: Could not find update-config.json. Run 'webdriver-manager update' to download binaries.
```
Execute o comando abaixo:

```
webdriver-manager update
ou
node ./node_modules/protractor/bin/webdriver-manager update
```

## Referências

Link para maiores informações sobre o protractor: http://www.protractortest.org/#/
