const camelCase = require('../src/camelCase');
test("camelCase function", () => {
	expect(camelCase("one Two")).toBe('oneTwo');
	expect(camelCase("one!!Two")).toBe('oneTwo');
	expect(camelCase("one-Two")).toBe('oneTwo');
	expect(camelCase("one-Two Three")).toBe('oneTwoThree');
	expect(camelCase("one-Two Three@")).toBe('oneTwoThree');
	expect(camelCase("one-Two Three@")).toBe('oneTwoThree');
	expect(camelCase("#hashtag for the win")).toBe('hashtagForTheWin');
})