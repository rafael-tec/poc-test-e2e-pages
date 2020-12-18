# poc-test-e2e

Criação de testes end to end para analisar a viabilidade de uso da ferramenta

### Pré requisitos

- npm - v6.14.8

### Dependências utilizadas

- cypress - v6.0.1
- chance - v1.1.7
- cypress-localstorage-commands - v1.2.5
- mocha - v8.2.1
- mochawesome - v6.2.1
- mochawesome-report-generator - v5.1.0
- mochawesome-merge - v4.2.0

### Execução via interface

- Execute `npx cypress open`
- Clique no arquivo de testes que deseja executar

### Execução via terminal

- Execute `npm run cy:run` (Executa todos os arquivos de testes)
- Execute `npm run cy:run:clean` (Executa todos os arquivos de testes e limpa arquivos e diretórios)

### Exeução via container docker

- Execute `sudo docker build -t cypress-test .`
- Execute `sudo docker run -it cypress-test`

### Relatório de execução

Foram utilizadas libs do `mochawesome` para geração de relatório com o resultado dos testes em HTML com screenshots (para casos de falha).

É criado um novo relatório no caminho `./poc-test-e2e/test-report/index.html` a cada execução de script `cy:generate:html:report`
