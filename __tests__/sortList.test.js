const sortList = require('../src/sortList');

test("sortList function", () => {
	expect(sortList([2,1,5,8,3])).toStrictEqual([1,2,3,5,8]);
	expect(sortList(["a","d","b","c","e"])).toStrictEqual(["a","b","c","d","e"]);
});