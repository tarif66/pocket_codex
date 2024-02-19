export default class Fec {
    id: number;
    name: string;
    picture: string;
    hp: number;
    bravery: number;
    move: number;
    save: number;

    constructor(
        id: number,
        name: string,
        picture: string,
        hp: number,
        bravery: number,
        move: number,
        save: number,
    ) {

    this.id = id;
    this.name = name;
    this.picture = picture;
    this.hp = hp;
    this.bravery = bravery;
    this.move = move;
    this.save = save;
    }
}