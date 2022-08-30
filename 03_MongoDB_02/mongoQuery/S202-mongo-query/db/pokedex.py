import numbers
from db.database import Database


class Pokedex:
    def __init__(self):
        self.db = Database(database="pokedex", collection="pokemons")
        self.db.resetDatabase()
        self.collection = self.db.collection

    def getPokemonByWeaknesses(self, atributo: str):
        response = self.collection.find({"weaknesses": atributo})
        pokemons = []
        for pokemon in response:
            pokemons.append({
                "name": pokemon["name"],
                "type": pokemon["type"],
                "height": pokemon["height"],
                "weight": pokemon["weight"],
                "spawn_chance": pokemon["spawn_chance"],
                "spawn_time": pokemon["spawn_time"],
            })
        return pokemons

    def getPokemonsBySpawTime(self, time: str):
        response = self.collection.find({"spawn_time": time})
        pokemons = []
        for pokemon in response:
            pokemons.append({
                "name": pokemon["name"],
                "spawn_chance": pokemon["spawn_chance"],
            })
        return pokemons

    def getPokemonsBySpawChance(self, spawChance: numbers):
        response = self.collection.find({"spawn_chance": spawChance})
        pokemons = []
        for pokemon in response:
            pokemons.append({
                "name": pokemon["name"],
                "type": pokemon["type"],
                "spawn_time": pokemon["spawn_time"],
            })
        return pokemons

    def getPokemonsBetweenSpawChance(self, minSpawChance: numbers, maxSpawChance: numbers):
        response = self.collection.find(
            {"spawn_chance": {"$gt": minSpawChance, "$lt": maxSpawChance}})
        pokemons = []
        for pokemon in response:
            pokemons.append({
                "name": pokemon["name"],
                "type": pokemon["type"],
                "spawn_chance": pokemon["spawn_chance"],
                "spawn_time": pokemon["spawn_time"],
            })
        return pokemons

    def getPokemonsEggs(self):
        response = self.collection.find()
        pokemons = []
        for pokemon in response:
            pokemons.append({
                "name": pokemon["name"],
                "egg":pokemon["egg"],
                "type": pokemon["type"],
            })
        return pokemons

    def find(self, filters: dict):
        response = self.collection.find(filters)
        pokemons = []
        for pokemon in response:
            pokemons.append(pokemon)
        return pokemons

    def getAllPokemons(self):
        response = self.collection.find({}, {"name": 1, "_id": 0})
        pokemons = []
        for pokemon in response:
            pokemons.append(pokemon)
        return pokemons

    def getPokemonByName(self, name: str):
        response = self.collection.find({"name": name},
                                        {"_id": 0, "name": 1,
                                         "next_evolution": 1, "prev_evolution": 1,
                                         "type": 1, "weaknesses": 1})
        result = {}
        for pokemon in response:
            result = pokemon
        return result

    def getPokemonsByType(self, type: list):
        response = self.collection.find({"type": {"$all": type}}, {
            "_id": 0, "name": 1, "type": 1})
        result = []
        for pokemon in response:
            result.append(pokemon)
        return result

    def getPokemonEvolutionsByName(self, name: str):
        pokemon = self.getPokemonByName(name)

        evolutions = [pokemon['name']]
        hasNextEvolutions = ('next_evolution' in pokemon)
        hasPrevEvolutions = ('prev_evolution' in pokemon)

        if hasNextEvolutions:
            nextEvolutions = list(pokemon['next_evolution'])
            for evolution in nextEvolutions:
                evolution = self.getPokemonByName(evolution['name'])
                evolutions.append(evolution['name'])

        if hasPrevEvolutions:
            previousEvolutions = list(pokemon['prev_evolution'])
            for evolution in previousEvolutions:
                evolution = self.getPokemonByName(evolution['name'])
                evolutions.append(evolution['name'])

        return evolutions
