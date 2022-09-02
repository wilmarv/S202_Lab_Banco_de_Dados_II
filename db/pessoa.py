import numbers
from db.database import Database
from dataset.livros_dataset import dataset
from pymongo import ASCENDING


class Pessoa:

    livrosLidos = []

    def __init__(self):
        self.db = Database(database="database",
                           collection="livros", dataset=dataset)
        self.db.resetDatabase()
        self.collection = self.db.collection

    def leLivros(self):
        result = self.collection.find()
        for livro in result:
            self.livrosLidos.append(livro)

    def alteraPreco(self, id: str, preco: numbers):
        res = self.collection.update_one(
            {"_id": id}, {"$set": {"preco": preco}})
        return res.modified_count

    def criaLivro(self, titulo: str, autor: str, ano: numbers, preco: numbers):
        res = self.collection.insert_one({
            "titulo": titulo,
            "autor": autor,
            "ano": ano,
            "preco": preco
        })
        return res.inserted_id

    def deletaLivro(self, id: str):
        res = self.collection.delete_one({"_id": id})
        return res.deleted_count

    def criarIndex(self, att: str):
        self.collection.create_index([(att, ASCENDING)])
