from db.database import Graph
from model.materia import Materia
from model.professor import Professor

class EscolaDB(object):
    def __init__(self):
        self.db = Graph(uri='bolt://3.222.205.138:7687',
                        user='neo4j', password='periods-poke-things')

    def createProfessor(self, professor: Professor):
        return self.db.execute_query('CREATE (n:Prof {nome:$nome, idade:$idade,area:$area}) return n',
                                     {'nome': professor.nome, "idade": professor.idade, "area": professor.area})

    def createMateria(self, materia: Materia):
        return self.db.execute_query('CREATE (n:Materia {assunto:$assunto, horario:$horario}) return n',
                                     {'assunto': materia.assunto, "horario": materia.horario})

    def read_professor_by_name(self, nome: str):
        return self.db.execute_query('MATCH (n:Prof {nome:$nome}) RETURN n',
                                     {'nome': nome})

    def read_materia_by_assunto(self, assunto: str):
        return self.db.execute_query('MATCH (n:Materia {assunto:$assunto}) RETURN n',
                                     {'assunto': nome})

    def read_all_nodes(self):
        return self.db.execute_query('MATCH (n) RETURN n')

    def update_age(self, professor: Professor):
        return self.db.execute_query('MATCH (n:Prof {nome:$nome}) SET n.idade = $idade RETURN n',
                                     {'nome': professor.nome, "idade": professor.idade})

    def delete(self, professor: Professor):
        return self.db.execute_query('MATCH (n:Prof {nome:$nome}) DETACH DELETE n',
                                     {'nome': professor.nome})

    def delete_all_nodes(self):
        return self.db.execute_query('MATCH (n) DETACH DELETE n')

    def create_relation(self, professor: Professor, materia: Materia, ano: int):
        return self.db.execute_query('MATCH (n:Prof {nome:$nome}), (m:Materia {assunto:$assunto}) CREATE (n)-[r:Leciona{desde: $ano}]->(m) RETURN n, r, m',
                                     {'nome': professor.nome, 'assunto': materia.assunto, 'ano': ano})

    def read_relation(self, professor: Professor, materia: Materia):
        return self.db.execute_query('MATCH (n:Prof {nome:$nome})-[r]->(m:Materia {assunto:$assunto}) RETURN n, r, m',
                                     {'nome': professor.nome, 'assunto': materia.assunto})
