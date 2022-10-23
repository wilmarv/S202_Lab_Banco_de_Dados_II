from db.escolaDB import EscolaDB
from model.materia import Materia
from model.professor import Professor

lucas = Professor("Lucas Guitton",26,"Filosofia")
malu = Professor("Maria Luiza",21,"Circuitos Integrados") 
renzo = Professor("Renzo",49,"Banco de Dados") 
ynoguti = Professor("Carlos Ynoguti",50,"algorito de dados") 


bancoDados = Materia("Bando de DadosII","19H30")
algorito2 = Materia("Estrutura de dados","21H30")

dao = EscolaDB()

dao.createProfessor(lucas)
dao.createProfessor(malu)
dao.createProfessor(renzo)
dao.createProfessor(ynoguti)

dao.createMateria(bancoDados)
dao.createMateria(algorito2)

dao.create_relation(renzo,bancoDados,2001)
dao.create_relation(ynoguti,algorito2,2009)
dao.create_relation(lucas,algorito2,2018)
dao.create_relation(malu,algorito2,2021)


dao.db.close()


