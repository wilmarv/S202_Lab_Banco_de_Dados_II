import Jogo from "./Jogo";

class Usuario {

    private _id?: number;
    private _nome: String;
    private _email: String;
    private _bibliotecaJogos: Array<Jogo>;
    private _listaAmigos: Array<Usuario>;

    constructor(nome: String, email: String, bibliotecaJogos: Array<Jogo> = [], listaAmigos: Array<Usuario> = []) {
        this._nome = nome;
        this._email = email;
        this._bibliotecaJogos = bibliotecaJogos;
        this._listaAmigos = listaAmigos;
    }

    public get id(): number {
        if (this._id !== undefined)
            return this._id;
        return 0;
    }
    public set id(value: number) {
        this._id = value;
    }

    public get nome(): String {
        return this._nome;
    }
    public set nome(value: String) {
        this._nome = value;
    }

    public get email(): String {
        return this._email;
    }
    public set email(value: String) {
        this._email = value;
    }

    public get bibliotecaJogos(): Array<Jogo> {
        if (this._bibliotecaJogos !== undefined)
            return this._bibliotecaJogos;
        return [];
    }
    public set bibliotecaJogos(value: Array<Jogo>) {
        this._bibliotecaJogos = value;
    }

    public get listaAmigos(): Array<Usuario> {
        if (this._listaAmigos !== undefined)
            return this._listaAmigos;
        return [];
    }
    public set listaAmigos(value: Array<Usuario>) {
        this._listaAmigos = value;
    }
}
export default Usuario;