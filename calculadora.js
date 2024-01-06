//declaração da função
function calculadora(){

    const operacao = Number(prompt('Escolha uma operação:\n 1 - Adição(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão(/)\n 5 - Resto de Divisão(%)\n 6 - Potenciação(**)'));
            
    //verificanso se a operação é válida.
    if(!operacao|| operacao > 6 || operacao < 1){
        alert('Erro - operação inválida!');
        calculadora();
    } else{
        
        //declaração de variáveis locais
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor:'));
        let resultado;
                
        //verificação das variáveis
        if (!n1 || !n2){
            alert('Erro - parâmetros inválidos!');
            calculadora();
        }else{
            //criando as funções das operações
            function adicao(){
                resultado = n1 + n2;
                //aprendi a mostrar o resultado usando template strings
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao(){
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperação();
            }
            function multiplicacao(){
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperação();
            }
            function divisao(){
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`);
                novaOperação();
            }
            function resto(){
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`);
                novaOperação();
            }
            function potenciacao(){
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2} é igual a ${resultado}`);
                novaOperação();
            }
            
            //Opção de efetuar uma nova operação.
            function novaOperacao(){
                let opcao = Number(prompt('Deseja efetuar uma nova operação?\n 1 - Sim\n 2 - Não'));
                if(opcao == 1){
                    calculadora();
                } else if(opcao == 2){
                    alert('obrigada por usar esta calculadora!');
                } else{
                    alert('Digite uma opção válida!');
                    novaOperação();
                }
            }
        }
                    
        //verificando a operação selecionada. Aqui optei por usar Switch ao invés de Ifs aninhados (como na aula) por ser uma estrutura que realiza menos verificações
        switch (operacao){
            case 1:
                adicao();
                break;

            case 2:
                subtracao();
                break;

            case 3:
                multiplicacao();
                break;
                       
            case 4:
                divisao();
                break;

            case 5:
                resto();
                break;

            case 6:
                potenciacao();
                break;

            default:
                console.log('Operação inválida')
                break;
        }
    }
}
        
//chamando a função
calculadora();