# PRIMEIRO NÚMERO NÃO-CONSECUTIVO

## Desafio

Sua tarefa é encontrar o primeiro elemento de um array que não seja consecutivo. Por não consecutivo, queremos dizer não exatamente 1 maior que o elemento anterior da matriz. Por exemplo. Se tivermos um array [1,2,3,4,6,7,8] então 1 então 2 então 3 então 4 são todos consecutivos mas 6 não é, então esse é o primeiro número não consecutivo. Se a matriz inteira for consecutiva, retorne null. A matriz sempre terá pelo menos 2 elementos e todos os elementos serão números. Os números também serão únicos e em ordem crescente. Os números podem ser positivos ou negativos e o primeiro não consecutivo também pode ser!

Você pode escrever uma solução que retornará nulo para [] e [ x ]? (Este é um array vazio e um com um único número e não é testado, mas você pode escrever seu próprio teste de exemplo.)

#

# Solução
    function firstNonConsecutive(arr) {
        let previous = arr[0];
        let first;
        for (let i = 1; i < arr.length; i++) {
            if ((previous + 1) != arr[i]) {
                first = arr[i]
                break;
            }
        previous++;
    }
        return first !== undefined ? first : null;
    }
<br>
Conforme os testes no Codewars, a função firstNonConsecutive será executada recebendo uma array em (arr), e seu desafio é reconhecer o primeiro número não consecutivo, ou seja, em uma array [1, 2, 3, 4, 6, 7, 8], sua função deverá retornar o número 6, e no caso [1, 2, 3, 4, 5], sua função deverá retornar null.
<br><br>

## Váriaveis
As váriaveis previous e first determinam respectivamente o primeiro número da array (arr[0]) e o primeiro número não consecutivo da array
No caso de i, ela é usada para percorrer o array conforme condiciona o loop for();

## Loop
O loop utilizando a váriavel i, percorre o array e, se a variável previous somada a 1 for diferente do índice atual (i), ele define first como o índice atual da array e para o loop.

No caso, <b>previous</b> é atualizada constantemente (somada +1), caso o loop não entre na condicional, o que torna o valor dela -1 do valor seguinte da array (caso for consecutiva);

    if((previous + 1) != arr[i]){
        first = arr[i];
        break;
    } //caso não entre na condicional:
    previous++;

## Return
Você com certeza notou esses símbolos diferentes no return, se trata de um <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator">Operador Condicional Ternário</a>, ele funciona como uma condicional em uma única linha (é recomendada a consulta à documentação MDN) e nesse caso significa basicamente que, se o first for igual a <i>undefined</i>, ele vai retornar <i>null</i> ao invés disso.

#

# Referências:
1. <a href="https://www.codewars.com/kata/58f8a3a27a5c28d92e000144">Desafio no Codewars</a>
2. <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Conditional_Operator'>Ternary MDN Docs (recomendado)</a>
3. <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/for">Loop For MDN Docs (recomendado)</a>
4. <a href="https://www.youtube.com/watch?v=QVrrqgDhhu4">Diferença entre var, let e const Filipe Deschamps</a>  <b>Muito Recomendado</b>
5. <a href="https://anothercodingblog.com/2020/02/26/daily-coding-challenge-find-the-first-non-consecutive-number-in-an-array-written-in-javascript-python-and-java/">Site utilizado como base</a>
