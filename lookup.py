from db.database import Database
from helper.WriteAJson import writeAJson
from dataset.pessoa_dataset import dataset as pessoa_dataset
from dataset.carro_dataset import dataset as carro_dataset
from dataset.produto_database import dataset as produto_dataset

# carros = Database(
#    database="database",
#    collection="carros",
#    dataset=carro_dataset
# )
# carros.resetDatabase()

# result2 = carros.collection.aggregate([
#    {"$lookup":
#        {
#            "from": "pessoas",  # outra colecao
#            "localField": "dono_id",  # chave estrangeira
#            "foreignField": "_id",  # id da outra colecao
#            "as": "dono"  # nome da saida
#        }
#     }
# ])

#writeAJson(result2, "result2")

pessoas = Database(
    database="database",
    collection="pessoas",
    dataset=pessoa_dataset
)

produtos = Database(
    database="database",
    collection="produtos",
    dataset=produto_dataset
)
pessoas.resetDatabase()
produtos.resetDatabase()

compras = produtos.collection.aggregate([
    {"$lookup":
        {
            "from": "pessoas",  # outra colecao
            "localField": "cliente_id",  # chave estrangeira
            "foreignField": "_id",  # id da outra colecao
            "as": "comprador"  # nome da saida
        }        
    },
    {"$group":
        {
            "_id": "$comprador",
            "total": {"$sum": "$total"},
        }
     },
    {"$sort": {"total": 1}},
    {"$unwind": '$_id'},
    {"$project":
        {
            "_id": 0,
            "nome": "$_id.nome",
            "total": 1,
            "desconto": {
                "$cond": {"if": {"$gte": ["$total", 10]}, "then": True, "else": False}
            }
        }
     }

])
writeAJson(compras, "compras")
