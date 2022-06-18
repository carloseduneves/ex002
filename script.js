'use strict'

//cálculo de empréstimo ou financiamento


//Fórmula de juros compostos:
const calculando = function( capital, tempo, taxa){

    const rendimento = (capital * (1+taxa)**tempo)

    const ValorPgto = rendimento.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const jurosPagos = (rendimento - capital).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const parcelas = (rendimento / tempo / 12).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})

    const value =  [ValorPgto, jurosPagos, tempo * 12, parcelas]

    return value

}


//Botão de chamada para calcular:
function calcular(){
    const Valor = document.getElementById('ValorImóvel')
    const Tempo = document.getElementById('tempo')
    const Juros = document.getElementById('juros')

    const Resp = document.getElementById('resposta')
    
    const ValorPago = document.getElementById('valorPago')
    const jurosTotais = document.getElementById('totaldeJuros')
    const ParcelasMensais = document.getElementById('parcelasMensais')

    const Valorn = Number(Valor.value)
    const Tempon = Number(Tempo.value)
    const Jurosn = Number(Juros.value)/100

    const RespFinal = calculando(Valorn, Tempon, Jurosn)

    Resp.style.display = 'block'
//Retorno:
    ValorPago.innerHTML = RespFinal[0]
    jurosTotais.innerHTML = RespFinal[1]
    ParcelasMensais.innerHTML = `${Tempon * 12} vezes de ${RespFinal[3]}`

    
}

