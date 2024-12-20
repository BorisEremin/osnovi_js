//1. Сгенерируйте массив из 5 случайных цифр от 0 до 9.
// 2. Рассчитайте сумму элементов массива.
// 3. Найдите минимальное число в массиве.
// 4. Определите, есть ли в массиве число 3.

let array = [];
for (let i = 5; i < 5; i++) {
    array.push(Math.floor(Math.random() * 10));
}

let sum = array.reduce((acc, num) => acc + num, 0);

let min = Math.min(...array);

let hasThree = array.includes(3);

console.log('Массив:', array);
console.log('Сумма элементов:', sum);
console.log('Минимальное число:', min);
console.log('Есть ли число 3:', hasThree);