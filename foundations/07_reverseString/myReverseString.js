function reverseString() {
    const myTxt = prompt("Enter a string to reverse it:");
    if (myTxt === null) return;
    const reversed = myTxt.split("").reverse().join("");
    return reversed;
    
}

reverseString;
console.log(reverseString());