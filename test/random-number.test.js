import randomNumber from "../src/lib/random-number";

describe("random number", () => {
  it("should never generate the same number twice in a row", () => {
    const stubbedSeed = jest
      .fn()
      .mockImplementationOnce(() => 0.11175239026038519)
      .mockImplementationOnce(() => 0.11175239026038519)
      .mockImplementationOnce(() => 0.8203667391422971)
      .mockImplementationOnce(() => 0.8203667391422971)
      .mockImplementationOnce(() => 0.6488195874004861);

    const random = randomNumber(10, stubbedSeed);
    const firstNumber = random.next();
    expect(firstNumber).toBe(1);

    const secondNumber = random.next();
    expect(secondNumber).toBe(8);

    const thirdNumber = random.next()
    expect(thirdNumber).toBe(6)
  });
});
