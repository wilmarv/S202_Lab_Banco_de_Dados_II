from Pessoa import Pessoa

class Aluno(Pessoa):
    def __init__(self,nome,matricula,curso,periodo):
        super().__init__(self,nome)
        self.matricula = matricula
        self.curso = curso
        self.periodo = periodo