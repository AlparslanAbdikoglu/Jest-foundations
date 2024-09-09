// functions.js
function fetchData(callback) {
    setTimeout(() => {
        callback("myawesomecode");
    }, 1000);
}

module.exports = {
    fetchData
};
