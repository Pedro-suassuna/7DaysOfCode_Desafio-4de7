<h1 align="center">  Desafio "7 Days Of Code" de: Rafaella Ballerini<br>Day: 04/07</h1>

<h2 align="left"> O DESAFIO:</h2>

<p align = "justify">

Você deve criar um programinha que comece com um valor específico pré-definido entre 0 a 10 para o número que você vai adivinhar (7, por exemplo).

Em seguida, o programa vai perguntar para você qual o valor que você deseja chutar e, caso você acerte, ele irá te parabenizar. Caso erre, ele vai te dar mais 2 tentativas.

No fim, caso você não acerte nenhuma vez, ele vai imprimir qual era o número inicial.

Depois que o programinha estiver funcionando, tente usar um número randômico em vez de um número pré-definido.


</p></br>

<h2 align="left"> EXPLICAÇÃO EXTRA:</h2>
<p align="justify">

Você já viu estruturas condicionais em Javascript anteriormente, mas vou recapitular. O if é usado para verificar se uma determinada condição é verdadeira.

Exemplo:

        if (cidade === "Roma"){
            // mostre a foto do "Coliseu"
        }

Além disso, ele também pode ser usado com um ou vários else if, que irá saber que a condição anterior era falsa e vai verificar se a atual é verdadeira.

Por fim, existe o else sozinho, sem nenhuma condição, e o código dentro dele será executado sempre que todas as condições encadeadas anteriormente forem falsas.

        if (cidade === "Roma"){
            // mostre a foto do "Coliseu"
        }
        else if (cidade === "Paris"){
            // mostre a foto do "Torre Eiffel"
        }
        else {
            // dê a resposta "Você não digitou nenhuma cidade válida"
        }

Além disso, para a parte 4, você precisará de uma estrutura de repetição (loop) como o while. Para usá-lo, é bem fácil:

        let idade = 0;

        while (idade < 8) {
            // algum comando para imprimir a idade
            idade = idade + 1;
        }

Esse código começará com a idade em zero e, ao entrar no while, esse valor será impresso e, logo depois, incrementado em 1.

Ou seja, depois da primeira vez que ele passar, o valor da idade será igual a 1, que é menor que 8, e por isso, a condição do while terá um resultado verdadeiro e ele continuará a ser executado.

Ele só vai parar quando o valor da variável idade chegar a 8, que não é menor que 8, e por isso a condição do while terá um resultado falso.

</p></br>
