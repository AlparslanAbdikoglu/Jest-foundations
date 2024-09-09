//matchers in unit testing//
// ASYNC code in unit testing//
// MOCK functions //

test("two plus two is 4", () => {
  expect(2 + 2).toBe(4);
});

test('object assignment', () => { 
    const data ={ one:1 };
    data ['two'] = 2;
    expect(data) .toEqual ({ one: 1, two: 2});
 });

 test('null is false', () => {
    const n = null;
    expect(n).toBeFalsy();
 })


 const myFunction = require('./sum.js')
 test('Throws on invalid input', () => {
    expect(() => {
        myFunction('invalidInput');
    }
    ).toThrow();
 }) // check keywords later for matchers


 //ASYNC // 
 const { fetchData } = require('./sum.js');  // Adjust the path to where your functions are defined
 test("fetchData returns the correct data", done => {
    function callback(data) {
        try {
            expect(data).toBe("myawesomecode");
            done();  // Indicate that the test is complete
        } catch (error) {
            done(error);  // Pass the error to Jest to fail the test
        }
    }

    fetchData(callback);  // Call the async function with the callback
});