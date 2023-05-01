const newRandomNumberGenerator = (length, min, max, n, m) => {
    const result = [];
    for(let i=0; i < length; i++){
        result.push(Math.floor(Math.random() * (Math.abs(n-m)+1)) + Math.min(n,m))
    }
    return result;
}
const randomNumberArr = newRandomNumberGenerator(10, 1,100, -100,100);
console.log(randomNumberArr);