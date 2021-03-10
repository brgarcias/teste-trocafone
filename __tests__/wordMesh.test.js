const wordMesh = require('../src/wordMesh');
test("wordMesh function", () => {
	expect(wordMesh(["beacon","condominium","umbilical","california"])).toBe("conumcal");
	expect(wordMesh(["allow","lowering","ringmaster","terror"])).toBe("lowringter");
	expect(wordMesh(["abandon","donation","onion","ongoing"])).toBe("dononon");
	expect(wordMesh(["apple","peggy","onion","ongoing"])).toBe(false);
	expect(wordMesh(["jamestown","ownership","hippocampus","pushcart","cartographer","pheromone"])).toBe("ownhippuscartpher"	);
})

