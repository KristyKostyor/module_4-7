const numRandomArr = (lenght, min, max, type='all') => {
    result=[];
    const isEven = num => num % 2 === 0;
    const isOdd  = num => num % 2 !== 0;
    
    for(let i = 0; i < lenght; i++ ) {
        const newRandomNum = Math.floor(Math.random() * (max - min + 1) + min);

        if (type === 'even' && !isEven(newRandomNum)){
            i--;
            continue;
        }
        if(type === 'odd' && !isOdd(newRandomNum)){
            i--;
            continue;
        }
        result.push(newRandomNum);
    }
    return result;
}

const evenNumbers = numRandomArr(10, 1, 100, "even");
const oddNumbers = numRandomArr(10, 1, 100, "odd");
const allNumbers = numRandomArr(10, 1, 100);

console.log('четные числа:', evenNumbers); // Результат: массив из 10 случайных четных чисел от 1 до 100
console.log("нечетные числа:", oddNumbers); // Результат: массив из 10 случайных нечетных чисел от 1 до 100
console.log('все случаные числа:', allNumbers);// Результат: массив из 10 случайных чисел от 1 до 100
