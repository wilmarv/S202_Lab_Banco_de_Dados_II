from db.database import Database
from helper.WriteAJson import writeAJson
from dataset.produto_database import dataset

compras = Database(database="database", collection="produtos", dataset=dataset)
# compras.resetDatabase()

result1 = compras.collection.aggregate([
    # formata os documentos
    {"$group": {"_id": "$cliente_id", "total": {"$sum": "$total"}}},
    {"$sort": {"total": -1}},  # ordena os documentos
    {"$project": {
        "total": 1,
        "maior_30": {
            "$cond": {"if": {"$gte": ["$total", 30]}, "then": "sim", "else": "não"}
        }
    }}
    # percebam que não utilizamos o sifrão '$' no campo 'total' do Stage $sort
    # porque o campo 'total' é dos documentos formatados pelo Stage $group

    # Conceito de 'field paths' em pipeline expressions (DOCS)
])
writeAJson(result1, "result1")
