function fibonacci (num) {
    let n1 = 0, n2 = 1, nextNumber;
    for (let i = 0; i <=num; i++) {
        console.log(n1);
        document.write(n1);
        nextNumber = n1 + n2; 
        n1 = n2; 
        n2 = nextNumber;
    }
}  
console.log(fibonacci(10));
