var alunos = ["Leí", "Helamã", "Lamã", "Lemuel", "Siblon", "Néfi"];
var n1 = [7, 6, 3, 4, 8.5, 6];
var n2 = [9, 9, 4, 3, 7.5, 8];

function media(n1,n2){
    return (n1+n2)/2;
}

function passou (media){
    if (media >= 5){
        return "Aprovado"
    }else{
     return "Reprovado"
}
}

for (var index in alunos){

    var notas1 = n1[index];
    var notas2 = n2[index];
    var m = media(notas1, notas2);
    console.log(alunos[index] + " - " + notas1 + " - " + notas2 + " - " + media(notas1, notas2) 
                            
                              + " - " + m + " - " + passou(m));
}
