const findFirstBiggestWord = require('../src/findFirstBiggestWord');
test("findFirstBiggestWord function", () => {
	expect(findFirstBiggestWord("The tree is under sky")).toBe('under');
	expect(findFirstBiggestWord("The quick lazy")).toBe('quick');
	expect(findFirstBiggestWord("The one who knocks")).toBe('knocks');
	expect(findFirstBiggestWord("You should have said my name!!")).toBe('should');
	expect(findFirstBiggestWord("You're right!")).toBe('right');
	expect(findFirstBiggestWord("A song of ice and fire")).toBe('song');
})

