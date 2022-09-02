<h1 align="center">
 📄 # Relatório 04 - MongoDB parte 03
</h1>

## Exercício

Crie uma `aggregate` que tenha

1. `$lookup` entre as compras e as pessoas.
2. `$gruop` que crie as variáveis,  `"_id"` que deve ser as informações do comprador e `"total"` que será a soma dos valores das compras da pessoa.
3. `$sort` em ordem pelo `"total"` decrescente.
4. Adicione aqui `{"$unwind": '$_id'},` para retirar a pessoa do array.
5. `"$project"` que adicionara um campo booleano de desconto, caso o `"total"` seja superior a `10`. Mostre o `“nome”`  da pessoa e o `“total”` da compra e esconda o `“_id”`.

# Saídas

"""
[
    {
        "nome": "Joao Algusto",
        "total": 9.46,
        "desconto": false
    },
    {
        "nome": "Marina Santos",
        "total": 32.85,
        "desconto": true
    },
    {
        "nome": "Cleber Almeida",
        "total": 34.980000000000004,
        "desconto": true
    }
]
"""
