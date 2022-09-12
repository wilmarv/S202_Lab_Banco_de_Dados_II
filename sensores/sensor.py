import numbers
from random import random
import time
import random
from db.database import Database
from threading import Thread

class Sensor:
    def __init__(self,nome:str,tempo:numbers):
        self.nome = nome
        self.time = tempo
        self.db = Database(database='bancoiot',collection='sensores')
        self.collection = self.db.collection

    def initSensor(self):
        self.collection.insert_one({
            "nomeSensor":self.nome,
            "valorSensor": 0,
            "unidadeMedida":"Cº",
            "sensorAlarmado":False
        })

    def alertaTemp(self):
        while True:
            sensorAlarmado = self.collection.find_one({"nomeSensor":self.nome})["sensorAlarmado"]
            if sensorAlarmado:
                print(f'=-=-==- Atenção! =-=-=-=-\nTemperatura muito alta! Verificar Sensor {self.nome}')
            else:
                temp = random.randint(30,40)
                self.collection.update_one({"nomeSensor":self.nome},{"$set":{"valorSensor":temp}})
                if temp > 38:
                    self.collection.update_one({"nomeSensor":self.nome},{"$set":{"sensorAlarmado":True}})
                print(f"O sensor {self.nome} está capitando {temp}C")
            time.sleep(self.time)

    def ativaSensor(self):
        thread = Thread(target=self.alertaTemp)
        thread.start()