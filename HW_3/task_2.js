function salaryAfterTax(salary) {
    return salary * 0.87;
    
}

let input = prompt('Укажите з/п:')
let number = parseFloat(input);

if (isNaN(number)) {
    console.log('Значение неверно')
    
} else {
    let afterTax = salaryAfterTax(number);
    console.log(`Размер заработной платы за вычетом налогов равен ${afterTax}`)
    
}
