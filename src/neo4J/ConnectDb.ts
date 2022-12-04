import Jogo from "../model/Jogo";
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
                const usuario = {
                    id: result._fields[0].elementId,
                    nome: result._fields[0].properties.nome,
                    email: result._fields[0].properties.email,
                }
                const createUsuario = new Usuario(usuario.nome, usuario.email);
                createUsuario.id = usuario.id;
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
            await this.session.run(
                "CREATE (n:Usuario {nome: $nome, email: $email}) RETURN n",
                { nome: usuario.nome, email: usuario.email }
            );
        }
        finally {
            await this.session.close();
        }
    }

    async getRelationships(usuario: Usuario) {

        usuario.listaAmigos = [];
        usuario.bibliotecaJogos = [];
        try {
            const amigos = await this.session.run(
                "MATCH (:Usuario{nome: $nome})-[:Amigo]-(amigo) RETURN amigo",
                { nome: usuario.nome }
            );
            const jogos = await this.session.run(
                "MATCH (:Usuario{nome: $nome})-[:Tem]-(jogo) RETURN jogo",
                { nome: usuario.nome }
            );

            amigos.records.forEach((result: any) => {
                const amigo = {
                    id: result._fields[0].elementId,
                    nome: result._fields[0].properties.nome,
                    email: result._fields[0].properties.email,
                }
                const createUsuario = new Usuario(amigo.nome, amigo.email);
                createUsuario.id = amigo.id;
                usuario.listaAmigos.push(createUsuario);
            });

            jogos.records.forEach((result: any) => {
                const jogo = {
                    id: result._fields[0].elementId,
                    nome: result._fields[0].properties.nome,
                    preco: result._fields[0].properties.preco,
                }
                const createJogo = new Jogo(jogo.id, jogo.nome, jogo.preco);
                usuario.bibliotecaJogos.push(createJogo);
            });
        }
        finally {
            await this.session.close();
        }
        return usuario;
    }

    async deleteRelationships(nomeUsuario: String, nomeJogo: String) {
        try {
            await this.session.run(
                "MATCH (:Usuario{nome: $nomeUsuario })-[r:Tem]-(:Jogo{nome: $nomeJogo }) Delete r",
                { nomeUsuario: nomeUsuario, nomeJogo: nomeJogo }
            );
        }
        finally {
            await this.session.close();
        }
    }
    async alterarApelido(usuario: Usuario, novoNome: String) {
        try {
            await this.session.run(
                "MATCH (u:Usuario{nome: $nome }) SET u.nome= $novoNome RETURN u",
                { nome: usuario.nome, novoNome: novoNome }
            );
            usuario.nome = novoNome;
        }
        finally {
            await this.session.close();
        }
        return novoNome;
    }
}
export default ConnectDb;
