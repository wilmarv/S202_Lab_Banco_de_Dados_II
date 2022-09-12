import pymongo

class Database:
    def __init__(self, database, collection):
        connectionString = "localhost:27017"
        self.clusterConnection = pymongo.MongoClient(
            connectionString,
            # CASO OCORRA O ERRO [SSL_INVALID_CERTIFICATE]
            tlsAllowInvalidCertificates=True
        )
        self.db = self.clusterConnection[database]
        self.collection = self.db[collection]

    def resetDatabase(self):
        self.db.drop_collection(self.collection)