import Usuario from "../model/Usuario";

const neo4j = require('neo4j-driver');
const driver = neo4j.driver('bolt://54.175.164.246:7687',
    neo4j.auth.basic('neo4j', 'scenes-arrangements-blots'),
    {});

class ConnectDb {

    private session: any = null;

    constructor() {
        if (this.session === null)
            this.session = driver.session({ database: "neo4j" });
    }

    async createNewUsuario(usuario: Usuario) {
        try {
            const result = await this.session.run(
                "CREATE (n:Usuario {nome: $nome, email: $email}) RETURN n",
                { nome: usuario.nome, email: usuario.email }
            );
            const singleRecord = result.records[0];
            const node = singleRecord.get(0);

            console.log(result);
        }
        finally {
            await this.session.close();
        }
    }

}
export default ConnectDb;
