# from pprintpp import pprint as pp
from db.database import Graph
from helper.write_a_json import write_a_json as wj

db = Graph(uri='bolt://44.197.179.87:7687', user='neo4j', password='groans-fire-painter')

# Questão 01
# A

A1 = db.execute_query('MATCH (Renzo:Teacher {name: "Renzo"}) RETURN Renzo.ano_nasc,Renzo.cpf')
wj(A1, '1A')

# B
B1 = db.execute_query("MATCH (m:Teacher) WHERE m.name =~'M.*' RETURN m.name,m.cpf")
wj(B1, '1B')

# C
C1 = db.execute_query("MATCH (c:City) RETURN c.name")
wj(C1, '1C')

# D
D1 = db.execute_query("MATCH (s:School) WHERE s.number >= 150 AND s.number <=550 RETURN s")
wj(D1, '1D')

# Questão 02
# A

A2 = db.execute_query("MATCH (t:Teacher) RETURN max(t.ano_nasc),min(t.ano_nasc)")
wj(A2, '2A')

# B
B2 = db.execute_query("MATCH (c:City) RETURN avg(c.population)")
wj(B2, '2B')

# C
C2 = db.execute_query("MATCH (c:City) WHERE c.cep='37540-000' RETURN replace(c.name,'a','A')")
wj(C2, '2C')

# D
D2 = db.execute_query("MATCH (t:Teacher) RETURN substring(t.name,2,1)")
wj(D2, '2D')

db.close()

# Questão 03
# A


class TeacherCRUD(object):
    def __init__(self):
        self.db = Graph(uri='bolt://44.197.179.87:7687', user='neo4j', password='groans-fire-painter')

    def create(self, name, ano_nasc, cpf):
        queryCreate = self.db.execute_query('CREATE (t:Teacher {name:$name, ano_nasc:$ano_nasc,cpf:$cpf}) return t',
                                            {'name': name, "ano_nasc": ano_nasc, "cpf": cpf})
        wj(queryCreate, "queryCreate")
        return queryCreate

    def read(self, name):
        queryRead = self.db.execute_query('MATCH (t:Teacher {name:$name}) RETURN t',
                                          {'name': name})
        wj(queryRead, "queryRead")
        return queryRead

    def update(self, name, newCpf):
        queryUpdate = self.db.execute_query('MATCH (t:Teacher {name:$name}) SET t.cpf = $newCpf RETURN t',
                                            {'name': name, "newCpf": newCpf})
        wj(queryUpdate, "queryUpdate")
        return queryUpdate

    def delete(self, name):
        queryDelete = self.db.execute_query('MATCH (t:Teacher {name:$name}) DETACH DELETE t',
                                            {'name': name})
        wj(queryDelete, "queryDelete")
        return queryDelete

# B
question3 = TeacherCRUD()
question3.create("Chris Lima",1956,"189.052.396-66")
# C
question3.read("Chris Lima")
# D
question3.update("Chris Lima","162.052.777-77")
