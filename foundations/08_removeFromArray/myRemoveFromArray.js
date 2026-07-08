const removeFromArray = function(array, ...args) {
    const newArray =[];
    for (let i=0, j=array.length; i<j; i++) {
        if (!args.includes(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
};
console.log(removeFromArray([1, 2, 3, 4], 3));           // [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 3, 2));        // [1, 4]
console.log(removeFromArray([1, 2, 3, 4], 7));           // [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4]));              // [1, 2, 3, 4]