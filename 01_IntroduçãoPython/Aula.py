from Professor import Professor
from Aluno import Aluno 

class Aula:
    def __init__(self, assunto):
        self.assunto = assunto
        self.professor : Professor = None
        self.alunos : list[Aluno] = []

    def getListaPresenca(self) -> str:
        lista = ''
        for aluno in self.alunos:
            lista = lista + f'''
            nome: {aluno.nome}
            matricula: {aluno.matricula}
            curso: {aluno.curso}
            periodo: {aluno.periodo}
            '''
        return lista

    def __str__(self):
        info = f"Aula de {self.assunto}"
        info += f"\n    Professor: {self.professor}"
        info += f"\n    Alunos Presentes:\n {self.getListaPresenca()}"
        return info