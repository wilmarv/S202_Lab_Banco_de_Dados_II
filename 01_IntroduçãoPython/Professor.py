from Pessoa import Pessoa

class Professor(Pessoa):
    def __init__(self,nome,especialidade):
        super().__init__(nome)
        self.especialidade = especialidade

    def __str__(self) -> str:
        return f"{self.nome}"