# Code Challenge Trocafone

Este repositório contém os testes unitários para validação do desafio técnico realizado para admissão.

Implemente as funções necessárias para passar nos testes automatizados e envie para o recrutador.

Utilize o comando abaixo para validar as funções.
```
npm run test
```

Durante o desenvolvimento das funções é provavel que você queira rodar os testes apenas da função que você está implementando no momento, para isso execute:
```
npm run test --test=NOMEDOTESTE
```
Onde `NOMEDOTESTE` pode ser uma parte do nome do arquivo ou o nome completo, por exemplo:
```bash
npm run test --test=sortList # para testar o desafio sortLIst

npm run test --test=camel # para testar o desafio camelCase
...
```
## Como começar

 Clone o repositório e execute:
 ```
 npm install
 ```
 E você estará pronto para começar o desafio.
 
 As funções dos desafios devem ser implementadas nos arquivos correspondentes na pasta `src` e você deve rodar o comando `npm run test` para validar se a função foi corretamente implementada.

Por exemplo, para realizar o desafio `SortList` você deve implementar a função no arquivo `src/sortList.js`, e após isso rodar os testes para validar.
## Desafio #1 SortList
Implemente no arquivo: `src/sortList.js`

O objetivo é implementar uma função que reordene e retorne uma lista passada em ordem alfabetica crescente, ou seja:
```js
sortList([3,2,1]); // deve retornar [1,2,3]
sortList([6,4,5]); // deve retornar [4,5,6]
sortList(["c","b","a"]); // deve retornar ["a","b", "c"]
```

## Desafio #2 CamelCase
Implemente no arquivo: `src/camelCase.js`

O propósito é implementar uma função que transforme uma sentença passada para o estilo camelCase e a retorne:
```js
camelCase("one word") // resulta oneWord
camelCase("I said one word!!") // resulta iSaidOneWord
```

## Desafio #3 DeduplicateSentence
Implemente no arquivo: `src/deduplicateSentence.js`

O propósito é implementar uma função que remova palavras que são duplicadas em sequência e retorne a string final.
Por exemplo:
```js
deduplicateSentence("Hello Bob. Hello Ana.") // resulta "Hello Bob. Hello Ana." mesmo hello repetindo na frase.
deduplicateSentence("Hello Hello Bob") // resulta "Hello Bob"
```

## Desafio #4 FindFirstBiggestWord
Implemente no arquivo: `src/findFirstBiggestWord.js`

O propósito é implementar uma função que encontre a primeira maior palavra de uma sentença e a retorne.
Considerando apenas [palavras](#informações).

```javascript
findFirstBiggestWord("Hello Bob") // resulta em "Hello"
findFirstBiggestWord("You're right!") // resulta em "right"
```
## Desafio #5 WordMesh (Bônus)
Implemente no arquivo: `src/wordMesh.js`

O propósito é implementar uma função que receba uma matriz com N palavras que podem ou não ser "ligadas" e retorne apenas os "conectores" entre as palavras.
Uma ligação de palavras neste desafio é quando o final de uma palavra contém as mesmas letras que o começo de outra. 

Exemplo de palavras ligáveis:
```
apply 	 -> plywood
apple 	 -> each
behemoth -> mother
...
```

Exemplo de palavras não ligáveis:
```
apply -> playground
apple -> peggy
...
```

Caso todas as palavras possam ser ligadas deve retornar apenas os "conectores" das palavras.
Exemplo:

```javascript
wordMesh(["apply", "plywood"]) // resulta em "ply", porque ply é o final de "apply" e o começo de "plywood"
wordMesh(["apple", "each"]) // resulta em "e"
wordMesh(["word", "notmesh"]) // false, porque o final de "word" não é começo de "notmesh"

```
A função deve suportar matrizes com N palavras, ou seja, de tamanho indeterminado, mas o tamanho sempre será par para o propósito do desafio.
```js
wordMesh(["apple", "each", "chainsmoker", "river"]) // echr
```
O resultado é `echr`, porque:
- `apple` e `each` ligam por `e`, 
- `each` e `chainsmoker` ligam por `ch` 
- e `chainsmoker` e `river` ligam por `r`


Se alguma das palavras não "ligar" com a próxima, a função deve retornar `false`.

## Informações
Palavras são conjuntos de letras alfanuméricos. Ou seja símbolos e acentuações como `!@#...` não são considerados palavras para o desafio.

Exemplo:
```
Palavras:
Hello!!! - A palavra é Hello
@Uncle123 - A palavra é Uncle
```
