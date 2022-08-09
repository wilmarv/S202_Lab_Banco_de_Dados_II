from Pessoa import Pessoa

class Professor(Pessoa):
    def __init__(self,nome,especialidade):
        super().__init__(self,nome)
        self.especialidade = especialidade