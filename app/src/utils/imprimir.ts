import { Imprimivel } from "./imprimivel";

export function imprimir(...objetos: Imprimivel[]){
    objetos.forEach(objeto=> {
        console.log(objeto.paraTexto());
    })
}