import { number } from "@inquirer/prompts";

console.log("Boas vindas ao jogo de adivinhação! ");

const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let numeroTentativas = 7;

async function jogar() {
    while (numeroTentativas > 0) {
        let palpite = await number({ message: "Digite um número de 1 a 100: " });

        if (palpite === numeroAleatorio) {
            console.log("Parabéns, você acertou!");
            return;
        } else if (palpite > numeroAleatorio) {
            console.log("Muito alto, tente um número menor.");
        } else if (palpite < numeroAleatorio) {
            console.log("Muito baixo, tente um número maior.");
        }

        numeroTentativas--;
    }

    console.log(`Tentativas acabaram, o número era ${numeroAleatorio}`);
}

jogar();
