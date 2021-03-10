/**
 * Recebe uma matriz e ordena ela pelo conteúdo.
 * Considere que virão apenas listas de números ou palavras.
 * @param array list 
 */
function sortList(list) {
	list.sort();
	
	function funcaoOrdenaNumero(x, y) {
		return parseInt(x) - parseInt(y);
	}
	list.sort(funcaoOrdenaNumero);
	return list;
}



module.exports = sortList;