console.log('Задание 1');
console.log(typeof(9));
// Предположение:
// Фактический:
console.log(typeof(1.2));
// Предположение:
// Фактический:
console.log(typeof(NaN));
// Предположение:
// Фактический:
console.log(typeof("Hello World"));
// Предположение:
// Фактический:
console.log(typeof(true));
// Предположение:
// Фактический:
console.log(typeof(2 != 1));
// Предположение:
// Фактический:
console.log(typeof("сыр" + "ы"));
// Предположение:
// Фактический:
console.log(typeof("сыр" - "ы"));
// Предположение:
// Фактический:
console.log(typeof("2" + "4"));
// Предположение:
// Фактический:
console.log(typeof("2" - "4"));
// Предположение:
// Фактический:
console.log(typeof("Сэм" + 5));
// Предположение:
// Фактический:
console.log(typeof("Сэм" - 5));
// Предположение:
// Фактический:
console.log(typeof(99 * "шары"));
// Предположение:
// Фактический:
console.log('Задание 2');
let length = 2;
let width = 3;
console.log('Стороны ', length,' и ', width);
console.log(length*2 + width*2);
console.log(length*width);
console.log((length*2 + width*2)/(length*width));
console.log('Задание 3');
let celcia = 25;
let farengheit = 66;
console.log(`${celcia}\xB0 C соответсвует ${celcia *9/5+32}\xB0 F`);
console.log(`${farengheit}\xB0 C соответсвует ${(farengheit -32)* 5/9 }\xB0 F`);
console.log('Задание 4');
let year= Number(prompt('Введите год'));
console.log(typeof(year));
if (year % 4 == 0){
    console.log(`${year} - високосный`)
    alert(true);
}
else if (year % 100 != 0){
    console.log(`${year} - високосный`)
    alert(true);
}
else {
    console.log(`${year} - не високосный`)
    alert(fasle);
}