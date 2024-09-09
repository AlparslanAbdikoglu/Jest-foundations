const { fetchData } = require('./sum3');  // 

test("fetchData calls the callback with the correct data", () => {
    // Create a mock function for the callback
    const mockCallback = jest.fn();

    // Call fetchData with the mock callback
    fetchData(mockCallback);

    // Use Jest's built-in functions to test the mock
    setTimeout(() => {
        // Check if the mock callback was called exactly once
        expect(mockCallback).toHaveBeenCalledTimes(1);

        // Check if the mock callback was called with the correct data
        expect(mockCallback).toHaveBeenCalledWith("myawesomecode");

        // You can also check the exact call if needed
        // expect(mockCallback.mock.calls[0][0]).toBe("myawesomecode");
    }, 1500);  // Wait slightly longer than the async delay
});
