/*Звездочка (*) используется перед именем функции для определения, что это функция-генератор.
Функция-генератор - это специальный тип функций в JavaScript,
который может приостанавливать своё выполнение и возобновлять его с того места, где он был остановлен.

Ключевое слово yield внутри функции-генератора позволяет остановить выполнение функции и вернуть значение.
Когда функция-генератор вызывается снова, она возобновляет своё выполнение с того места, где была остановлена,
и продолжает выполнение до следующего оператора yield.*/


function* randomNumberGenerator(length, min, max){
    for(let i = 0; i < length; i++){
        yield Math.floor(Math.random()*(max - min + 1)) + min;
    }
}
const randomNumber = [...randomNumberGenerator(10,1,100)];
console.log(randomNumber);