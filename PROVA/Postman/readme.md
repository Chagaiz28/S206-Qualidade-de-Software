# Projeto de Testes de API com Postman e Newman

## Descrição
Este projeto contém uma coleção de testes para a API JSONPlaceholder. Foram desenvolvidos 6 cenários de teste, incluindo 2 casos negativos. Os testes são automatizados e podem ser executados usando o Newman para gerar relatórios em HTML.

## Pré-requisitos
- [Node.js](https://nodejs.org/) instalado
- [Newman](https://www.npmjs.com/package/newman) instalado globalmente
- [Postman](https://www.postman.com/) para importar e visualizar a coleção e o ambiente

## Instalação do Newman
Para instalar o Newman globalmente, execute o seguinte comando:
```sh
npm install -g newman
```
# Projeto de Testes de API com Postman e Newman

## Importação da Coleção e Ambiente no Postman

1. Abra o Postman.
2. Clique em **"Import"** no canto superior esquerdo.
3. Selecione o arquivo **`PROVAAPI.postman_collection.json`** 

---

## Executando os Testes com Newman

Para executar os testes e gerar um relatório em HTML, siga os passos abaixo:

1. **Navegue até o diretório** onde os arquivos **`PROVAAPI.postman_collection.json`** está localizado
   ```sh
   cd /caminho/do/seu/projeto
   ```

2. **Execute o comando Newman** para rodar a coleção de testes e gerar um relatório em HTML:
    ```sh
   newman run PROVAAPI.postman_collection.json -r htmlextra
   ```
## Visualizando Relatório de Testes
Após a execução dos testes, um relatório em HTML será gerado no mesmo diretório.

# Para visualizar o relatório:
1. Abra o arquivo HTML gerado no seu navegador.
2. Navegue pelo relatório para ver os resultados detalhados de cada teste.