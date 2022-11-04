//Напишите функцию, которая проверяет, является ли число целым используя побитовые операторы
function isInteger(n) {}

//Напишите функцию, которая возвращает массив четных чисел от 2 до 20 включительно
function even() {}

//Напишите функцию, считающую сумму чисел до заданного используя цикл
function sumTo(n) {}

//Напишите функцию, считающую сумму чисел до заданного используя рекурсию
function recSumTo(n) {}

//Напишите функцию, считающую факториал заданного числа
function factorial(n) {}

//Напишите функцию, которая определяет, является ли число двойкой, возведенной в степень
function isBinary(n) {}

//Напишите функцию, которая находит N-е число Фибоначчи
function fibonacci(n) {}

/** Напишите функцию, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
};
