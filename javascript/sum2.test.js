const fetchPromise = require("./sum2")
test("cat", () => {
    return expect(fetchPromise()).resolves.toBe("cat");
});

test("the data is key", async () => {
    const data = await fetchPromise();
    expect(data).toBe("cat");
});