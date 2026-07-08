function repeatString () {
    const myTxt = prompt("Enter a string to repeat:");
    const myNum = prompt ("Enter the numbner of times to repeat the string:");

    myNum =Number(myNum);
    if(isNaN(myNum) || myNum <0){;
        alert("Please enter a valid positive number");
        return "";
        }
    
    let result ="";
    for (i=0,i<myNum,i++){
        result +=myTxt;
    }   
        result += myTxt;

}    

const repeated = repeatString();
console.log.apply(repeated);

       
   