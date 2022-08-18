from Pessoa import Pessoa

class Aluno(Pessoa):
    def __init__(self,nome,matricula,curso,periodo):
        super().__init__(nome)
        self.matricula = matricula
        self.curso = curso
        self.periodo = periodo

    def __str__(self) -> str:
        return f"O aluno {self.nome} da matricula {self.matricula} do curso {self.curso} do periodo {self.periodo}"
