let descricao = document.getElementById('descricao');
let valorConta = document.getElementById('valorConta');
const btnRegistro = document.getElementById('btn-registro');
const visualizador = document.getElementById('visualizador');
const totalfinal = document.getElementById('totalfinal');
const saldo = document.getElementById('saldo');



let resposta = "";
let numContas = 0;
let valTotal = 0;



btnRegistro.addEventListener('click',()=>{
    
    let saldoValue = saldo.value
    const salario = document.getElementById('salario');
    let valuesalario = Number(salario.value);
    
    



    numContas++
    
    let valorDescricao = descricao.value;
    let valorObtido = Number(valorConta.value);
    valTotal=(valTotal+valorObtido)
    resposta += `${valorDescricao} R$ ${valorObtido.toFixed(2)}\n`
    saldo.innerHTML = `${valuesalario-valTotal}`;

    
    
    visualizador.innerHTML = resposta;
    totalfinal.innerHTML=`${numContas} Contas - Total R$:${valTotal.toFixed(2)} `
    
    
    
    
    
    descricao.value= ""
    valorConta.value= "";
    descricao.focus();
    
    
})
