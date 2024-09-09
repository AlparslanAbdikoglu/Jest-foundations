/// Function starts//
function sum (a,b) {
    return a+b;
}


function myFunction(input) {
    if (typeof input !== 'number') {
        throw new Error("Invalid Input")
    }
}

// ASYNC// 
function fetchData(callback) {
    setTimeout(() => {
        callback("myawesomecode");
    }, 1000);
}

//makes it avb within one filel//
module.exports = {
    sum,
    myFunction,
    fetchData
};