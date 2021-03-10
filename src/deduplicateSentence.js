/**
 * Deve receber uma frase e remover duplicatas em sequência.
 * Por exemplo, na frase "Hello Hello Jack." deve retornar "Hello Jack."
 * Mas na frase "Hello Jack. Hello Ana." não deve haver alterações então 
 * deve retornar "Hello Jack. Hello Ana."
 */
function deduplicateSentence($inputString){
	const regex = /(\b\S+)(?:\s+\1\b)+/gisu;

	let m;

	while((m = regex.exec($inputString) !== null)) {
		
		if (m.index === regex.lastIndex) {
			regex.lastIndex++;
		}
	}


};

module.exports = deduplicateSentence;