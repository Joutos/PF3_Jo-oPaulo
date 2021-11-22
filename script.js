const calcular = document.getElementById('calcular');


function calculaJuros(){
    //Captura dos valores dos inputs e declaração de variáveis
    const nome = document.getElementById('nome').value;
    const  capital = parseInt(document.getElementById('capital').value);
    const  taxaJuros = document.getElementById('taxaJuros').value;
    const tJuros = taxaJuros/100;
    const  tempoAplicacao = document.getElementById('tempoAplicacao').value;
    
    const juros = parseInt(capital*tJuros*tempoAplicacao); 

    const  montante = capital*(Math.pow(1+tJuros, tempoAplicacao)-1)/tJuros;
    console.log(montante.toFixed(2));
  
    if (nome !== '' && capital !== '' && taxaJuros !== '' && tempoAplicacao !== '') {
        resultado.textContent = `Olá, ${nome}! Se você aplicar ${capital} à taxa de juros de ${taxaJuros}% ao mês durante ${tempoAplicacao} meses, acumulará uma poupança de R$${montante.toFixed(2)}!`;
   }else {
    resultado.textContent = 'Para calcular os seus juros preencha os campos obrigatórios';
}
}
calcular.addEventListener('click', calculaJuros);