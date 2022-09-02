# S202

## Como executar?

1. Criando uma venv:
    ```sh
    python -m venv .venv
    ```

2. Acionando a venv :
   * Lixun/ MacOS:
     ```sh
     source venv/bin/activate
     ```
3. Instale as dependências:
    ```sh
    pip install -r requirements.txt
    ```

4. execute o arquivo `main.py`
    ```sh
    python3 main.py
    ```

## Exercício

1_ Crie uma collection Livros com uma validation (schema) que aprove os seguintes documentos JSON

2_ Criar um classe Pessoa  que tenha as funções para:
 - Ler todos os documentos da collection.
 - Alterar o preço de um livro.
 - Adicionar um livro.
 - Deletar um livro. 

3_ Adicione no mínimo três livros na collection.

4_ Crie um index crescente por ano de lançamento.