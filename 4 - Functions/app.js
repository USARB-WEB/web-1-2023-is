const formula = "ax^2-bx+c=0";




function solveEcuation(a, b, c){
    const delta = b ** 2 - 4 * a * c;
    if(delta < 0){
        console.log('No solutions');
    } else if(delta === 0){
        let x = -b / 2 * a;
        console.log(`x1, x2 = ${x}`);
    } else if(delta > 0){
        let x1 = (-b - Math.sqrt(delta)) / (2 * a);
        let x2 = (-b + Math.sqrt(delta)) / (2 * a);
        console.log(`x1 = ${x1}`);
        console.log(`x2 = ${x2}`);
    }
}

const es6DeclaredFunction = () => {
    return 1;
}

solveEcuation(4, 2, -4)
solveEcuation(5, 0, -4)

const squareOfaNumber = x => x ** 2;

console.log(squareOfaNumber(2));

