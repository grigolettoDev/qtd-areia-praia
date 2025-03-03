
principal();

function principal(){
    mensagens("Seja bem vindo ao site que te auxilia na estimativa de grãos de areia da sua praia!");
    let comprimento = pegandoValores("Me informe o comprimento da faixa de areia da praia:");
    comprimento = conversaoUnidade(comprimento);
    let largura = pegandoValores("Me informe a largura da faixa de areia da praia:");
    largura = conversaoUnidade(largura);
    let profundidade = pegandoValores("Me informe a profundidade da faixa de areia da praia:");
    profundidade = conversaoUnidade(profundidade);
    mensagens("Estamos considerando o volume da areia de 1mm!");
    let valoresOptidos = calculoNumeroAreia(comprimento,largura,profundidade);
    let valorGrao = valoresOptidos.valorFinal;
    let baseGrao = valoresOptidos.base;
    let expoenteGrao = valoresOptidos.expoente;
    let valorBaseGrao = valorGrao+baseGrao;

    let elemento = document.querySelector("h1");
    elemento.innerHTML = `A estimativa de grãos de areia na praia é: ${valorBaseGrao}<sup>${expoenteGrao}</sup> grãos`;
}


function mensagens(mensagem){
    alert(mensagem);
}

function pegandoValores(texto){

    let dados; 

    while(1){

        dados = parseFloat(prompt(texto));

        if (!isNaN(dados)){
            break;
        } else{
            alert("Insira um valor numérico!!");
        }
    }
 return dados;
}

function conversaoUnidade(valor){
    //Converte a unidade para metros
    let metros = "m";
    let quilometro = "Km";
    let centimetro = "Cm";
    let unidade;

    while(1){

        unidade = prompt("Me informe a unidade de medida");

        if(unidade.toUpperCase() == metros.toUpperCase()){
            break;
        } else if (unidade.toUpperCase() == quilometro.toUpperCase()){
            valor = valor*1000;
            break;
        } else if (unidade.toUpperCase() == centimetro.toUpperCase()){
            valor = valor / 100;
            break;
        } else{
            alert(`As unidade de medidas permitidas são: ${metros}, ${quilometro} e ${centimetro}!!`);
        }
    }
    return valor;
}

function calculoNumeroAreia(comprimentoP, larguraP, profundidadeP){

    let diametro = 1/1000;
    let raio = diametro/2;
    let VolumeGrao = (4/3)*Math.PI*(raio**3);
    let volumePraia = comprimentoP*larguraP*profundidadeP;
    let qtdGrao = volumePraia/VolumeGrao;
    qtdGrao = qtdGrao.toExponential(5);

    let qtdGraoSeparado = qtdGrao.split("+");
    let retiraE = qtdGraoSeparado[0].split("e");

    let valorFinal = retiraE[0];
    let base = "x10";
    let expoente = qtdGraoSeparado[1];


    return {
        valorFinal,
        base,
        expoente,
    };

}