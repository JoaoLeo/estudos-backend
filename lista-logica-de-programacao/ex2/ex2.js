/**
    2. Escreva um script para ler o número total de eleitores de um município, o
    número de votos brancos, nulos e válidos. Calcular e escrever o percentual que
    cada um representa em relação ao total de eleitores.
    a. Bônus: A soma dos números não pode passar o total de eleitores.
 */

let eleitores = Number(prompt("Digite o número de eleitores: "));
let brancos = Number(prompt("Digite o número de votos brancos: "));
let nulos = Number(prompt("Digite o número de votos nulos: "));
let validos = Number(prompt("Digite o número de votos válidos: "));

const total = brancos + nulos + validos;
if(total > eleitores){
    window.alert("Erro! O numero de votos não pode passar o total de eleitores");
}
else  {

    const percBranco = brancos / total * 100;
    const percNulo = nulos / total * 100;
    const percValidos = validos / total * 100;
    document.writeln("soma: ", total);
    document.write("<br>");
    document.writeln("percentual de brancos: ", percBranco);
    document.write("<br>");
    document.writeln("percentual de nulos: ", percNulo);
    document.write("<br>");
    document.writeln("percentual de validos: ", percValidos);
}
