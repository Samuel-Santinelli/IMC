const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');
   
    if (nome != '' && altura != '' && peso != '' ){
        const valorImc = parseFloat(peso)/(parseFloat(altura)*parseFloat(altura));
        resultado.textContent = valorImc.toFixed(2);
        let result = '';
    
    if (valorImc <= 18.5){
     result = 'Você está abaixo do peso!';

    }else if (valorImc <= 25){
        result = 'Você está com o peso ideal!';

    }else if (valorImc <= 30){
        result = 'Você está um pouco acima do peso!';

    }else if (valorImc <= 35){
        result = 'Você está com obesidade grau I!';
    
    } else if (valorImc <= 40){
        result = 'Você está com obesidade grau II!';
    }else{
        result = 'Você está com obesidade grau III!';
    }

    resultado.textContent = `${nome} seu IMC é ${valorImc} ${result}`;


    }else{

        resultado.textContent = 'Preencha os dados';
    }

}

calcular.addEventListener("click", imc);
