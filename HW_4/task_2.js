//  Описание задачи: Имеется массив [1, 2, 3, 4, 5, 6, 7]. Необходимо удалить
// элементы 4 и 5, чтобы получить массив [1, 2, 3, 6, 7].

let array = [1, 2, 3, 4, 5, 6, 7];

array.slice(array.indexOf(4), 1);
array.slice(array.indexOf(5), 1);

console.log(array);