function sumall() {
    num1 = prompt("Please enter the first number.");
    if (isNaN(num1)||num1 === null ||num1<0) {
        alert("Please enter a valid positive integer");
        return;
    }
    num1 = number(num1);
    num2 = prompt ("Please enter the second number.");
    if (isNaN(num2)||num2 === null ||num2<0) {
        alert("Please enter a valid positive integer");
        return;
    }
    num2 = number(num2);
    if (num1 < num2) {
        let sum = 0;
        for (let i = num1; i <= num2; i++) {
            sum += i;
        }
    }   
    if (num1 > num2) {
        let sum = 0;
        for (let i = num2; i <= num1; i++) {
            sum += i;
    }    
    }
    console.log(sumAll());
}


