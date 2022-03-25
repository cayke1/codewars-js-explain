# TROLLS SEM VOGAIS
## Desafio

Trolls estão atacando sua seção de comentários! Uma forma comum de lidar com essa situação é remover todas as vogais dos comentários dos trolls, neutralizando a ameaça. Sua tarefa é escrever uma função que receba uma string e retorne uma nova string com todas as vogais removidas. Por exemplo, a string "This website is for losers LOL!" se tornaria "Ths wbst s fr lsrs LL!". **Nota: para este kata y não é considerado uma vogal.**

#

# Solução
    function disemvowel(str) {
        return str.replace(/[aeiou]/gi, '');
    }
<br>
Conforme os testes no Codewars, a função disemvowel será executada recebendo uma string em (str), e o seu desafio é retirar todas as vogais da mesma.
<br><br>

## Replace();
<br>
Utilizando a função <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace">replace()</a>, é possível retornar uma nova string com algumas ou todas as correspondências de um padrão substituídas por um determinado caractere (ou caracteres). A sintaxe da mesma funciona basicamente assim:

    String.replace(str1, str2);

Sendo **str1** a string a ser substituída e **str2** a que vai substituir (é sugerida a consulta à <a href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace">documentação</a> para mais detalhes).
<br><br>

## Regex
<br>
Você também deve ter notado os caracteres estranhos na str1, ou string a ser substituída,
essa é uma expressão regular, ou Regex, e é aí que a mágica acontece.

 
    /[aeiou]/gi


O primeiro caractere (/) é chamando de delimitador, ele basicamente diz ao interpretador onde o <a href='https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/RegExp'>Regex</a> começa e termina. Qualquer coisa após o delimitador é chamada de modificador (no caso **gi**), mas a gente já chega lá. Os próximos caracteres (aeiou) são as vogais que você deseja substituir cercados por um indicador ([ ]) dos mesmos. Por fim, temos os modificadores (gi) que significam:

    g: global, corresponde a todas as instâncias do padrão em uma string, não apenas uma;
    i: não diferencia maiúsculas de minúsculas

Sendo assim, utilizando **''** seu código vai substituir todas as letras **'aeiou'** da string por uma string vazia (ou seja, apagar), sendo elas minúsculas ou maiúsculas.

