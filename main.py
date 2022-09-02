from db.pessoa import Pessoa
from helper.WriteAJson import writeAJson

pessoa = Pessoa()

pessoa.criaLivro("The Witcher", "Andrzej sapkowski", 1993, 50)
pessoa.criaLivro("FullMetal Alchemist", "Hiromu Arakawa", 2001, 170)
pessoa.criaLivro("Livo aleatorio", "Algum Famoso", 2022, 5.5)

pessoa.alteraPreco(1, 45)
pessoa.deletaLivro("2")

pessoa.criarIndex("ano")

pessoa.leLivros()
writeAJson(pessoa.livrosLidos, "livrosLidos")