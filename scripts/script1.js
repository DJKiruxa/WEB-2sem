console.log('Задание 1');
console.log(typeof(9));
// Предположение:number
// Фактический: number
console.log(typeof(1.2));
// Предположение:number
// Фактический:number
console.log(typeof(NaN));
// Предположение: number
// Фактический: number
console.log(typeof("Hello World"));
// Предположение: string
// Фактический: string
console.log(typeof(true));
// Предположение: bool
// Фактический: bool
console.log(typeof(2 != 1));
// Предположение: bool
// Фактический: bool
console.log(typeof("сыр" + "ы"));
// Предположение: string
// Фактический: string
console.log(typeof("сыр" - "ы"));
// Предположение: string
// Фактический: number
console.log(typeof("2" + "4"));
// Предположение: string
// Фактический: string
console.log(typeof("2" - "4"));
// Предположение: number
// Фактический: number
console.log(typeof("Сэм" + 5));
// Предположение: string
// Фактический: string
console.log(typeof("Сэм" - 5));
// Предположение: number
// Фактический: number
console.log(typeof(99 * "шары"));
// Предположение: number
// Фактический: number
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
console.log('Задание 5');
let one = 2;
let two = 5;
if (one+two == 10 || one == 10 || two == 10 ){
    alert(true);
}
else{
    alert(false);
}
console.log('Задание 6');
let amount = Number(prompt('Введите число'));
let exit = "1 овечка... ";
for (let i = 2; i <= amount; i++){
   exit += `${i} овечка... `
}
console.log(exit)
console.log('Задание 7');
for (let i = 0; i<=15; i++){
    if (i%2 == 0){
        console.log(`${i} четное`);
    }
    else{
        console.log(`${i} нечетное`);
    }
}