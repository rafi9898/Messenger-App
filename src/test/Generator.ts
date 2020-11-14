export default class Generator {
    constructor() {

    }

    async generatorEmail() {
        const numberSurFix:number = Math.floor(Math.random() * (999999 - 100000)) + 100000;
        return numberSurFix;
    }
}