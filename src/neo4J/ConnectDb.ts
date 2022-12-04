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

    async findAllUsuarios(): Promise<Array<Usuario>> {

        const arrayUsuario: Array<Usuario> = [];

        try {
            const response = await this.session.run(
                "MATCH (n:Usuario) RETURN n",
            );

            response.records.forEach((result: any) => {
                const newUsuario = {
                    id: result._fields[0].elementId,
                    nome: result._fields[0].properties.nome,
                    email: result._fields[0].properties.email,
                }
                const createUsuario = new Usuario(newUsuario.nome, newUsuario.email);
                createUsuario.id = newUsuario.id;
                arrayUsuario.push(createUsuario);
            });
        }
        finally {
            await this.session.close();
        }
        return arrayUsuario;
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
