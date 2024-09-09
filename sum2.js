// async await

function fetchPromise() {
    return new Promise((resolve,) => {
setTimeout(() => resolve("cat"), 1000);
    });
}

module.exports = fetchPromise;