
function criarTabelaDeMultiplicacao(n) { // Substitua "nomeDaSuaFuncao" por um nome mais apropriado
    // escreve a coluna inicial
    let x = [];
    
    for (let linha = 0; linha <= n; linha++) {
        x[linha] = [];
        for(let coluna = 0; coluna <= n; coluna++){
            x[linha][coluna] = linha*coluna;
        }
        
    }
    
    console.table(x)
    // TODO: escrever dois loops aninhados para desenhar o array bidimencional e monstar o restante da tabela no console.
}

console.log(criarTabelaDeMultiplicacao(4))
        