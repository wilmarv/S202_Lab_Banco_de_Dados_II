from db.database import Database
from sensores.sensor import Sensor

Database(database='bancoiot',collection='sensores').resetDatabase()

temp1 = Sensor("Quarto",5)
temp1.initSensor()

temp2 = Sensor("Sala",10)
temp2.initSensor()

temp3 = Sensor("Cozinha",15)
temp3.initSensor()

temp1.ativaSensor()
temp2.ativaSensor()
temp3.ativaSensor()