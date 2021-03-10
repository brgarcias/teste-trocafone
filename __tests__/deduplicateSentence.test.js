const deduplicateSentence = require("../src/deduplicateSentence");
test("deduplicateSentence function", () => {
  expect(deduplicateSentence("The tree tree is under sky")).toBe(
    "The tree is under sky"
  );
  expect(deduplicateSentence("The quick lazy. Lazy is.")).toBe(
    "The quick lazy. Lazy is."
  );
  expect(deduplicateSentence("Who knocks? The one who knocks.")).toBe(
    "Who knocks? The one who knocks."
  );
  expect(
    deduplicateSentence("My name is Douglas. Your name name is not Douglas.")
  ).toBe("My name is Douglas. Your name is not Douglas.");
  expect(deduplicateSentence("You're right right!")).toBe("You're right!");
});
