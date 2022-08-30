from db.pokedex import Pokedex
from helper.WriteAJson import writeAJson

pokedex = Pokedex()
pokemons = pokedex.getPokemonByName('Pikachu')
#print(pokemons)
writeAJson(pokemons,"Pikachu")

query1 = pokedex.getPokemonByWeaknesses('Ice')
writeAJson(query1,"fraquezaPorGelo")

query2 = pokedex.getPokemonsBySpawTime('16:35')
writeAJson(query2,"tempoSpaw")

query3 = pokedex.getPokemonsBySpawChance(0.52)
writeAJson(query3,"chaceSpaw")

query4 = pokedex.getPokemonsBetweenSpawChance(0.2,0.7)
writeAJson(query4,"entreSpaw")

query5 = pokedex.getPokemonsEggs()
writeAJson(query5,"ovos")