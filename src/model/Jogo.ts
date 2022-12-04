class Jogo {

    private _id: number;
    private _nome: String;
    private _preco: number;

    constructor(id: number, nome: String, preco: number) {
        this._id = id;
        this._nome = nome;
        this._preco = preco;
    }

    public get id(): number {
        return this._id;
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

    public get preco(): number {
        return this._preco;
    }
    public set preco(value: number) {
        this._preco = value;
    }
}
export default Jogo;