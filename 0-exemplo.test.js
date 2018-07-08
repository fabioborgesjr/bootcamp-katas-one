function hello(name) {
  // IMPLEMENTE
}

describe("hello", function () {
  it("deve retornar Hello, Alan!", function () {
    expect(hello("Alan")).toBe("Hello, Alan!");
  });
});

describe("another test", function () {
  it("no", function () {
    expect(2).toEqual(1);
  });

  it("yes", function () {
    expect(1).toEqual(1);
  });
});
