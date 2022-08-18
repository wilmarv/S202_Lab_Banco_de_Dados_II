from Aluno import Aluno 
from Professor import Professor
from Aula import Aula

aluno1 = Aluno('Ana',25, 'GES', 7)
aluno2 = Aluno('Maria',10, 'GET', 2)

professor = Professor('Renzo','Banco de dados')
aula1 = Aula('Mongo')
aula1.professor = professor
aula1.alunos.append(aluno1)
aula1.alunos.append(aluno2)

print(aula1)