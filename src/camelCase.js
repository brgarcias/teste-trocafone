/**
 * Deve receber uma string e retornar em camelCase
 * Ex: "an apple" deve retornar "anApple"
 * @see https://pt.wikipedia.org/wiki/CamelCase
 */
function camelCase($inputString) {

        // Coloca espaço em caracteres especiais
        $inputString = $inputString.replace(/[^a-zA-Z0-9 ]/g, " ");
        // Coloca espaco antes de um upper
        $inputString = $inputString.replace(/([a-z](?=[A-Z]))/g, '$1 ');
        // Passa lower no primeiro caracter
        $inputString = $inputString.replace(/([^a-zA-Z0-9 ])|^[0-9]+/g, '').trim().toLowerCase();
        // Upper no caracter que comecar depois do espaco e juntar palavras
        $inputString = $inputString.replace(/([ 0-9]+)([a-zA-Z])/g, function(a,b,c) {
            return b.trim() + c.toUpperCase();
        });
        return $inputString;
};

module.exports = camelCase;