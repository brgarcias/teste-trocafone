/**
 * Deve receber uma frase e retornar a primeira maior palavra.
 */
function findFirstBiggestWord($inputString) {

	let maiorString = "";

	$inputString = $inputString.replace(/[^a-zA-Z0-9 ]/g, " ");
	
	$inputString.split(" ").forEach(word => {
		if (word.trim().length > maiorString.length) {
			maiorString = word.trim();
		}
	});
	return maiorString;
}

module.exports = findFirstBiggestWord;