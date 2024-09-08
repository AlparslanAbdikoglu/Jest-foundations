const sum = require('./sum');
// The test needs a desc //
test('adds 5 + 5 to equal 10', () => {
    expect(sum(5, 5)).toBe(10);
});
// function starts after desc