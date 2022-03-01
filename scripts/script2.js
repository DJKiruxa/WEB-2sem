console.log("Задание №1 \n");

function absValue(f)
{
    if (f<0)
    {
        f=f*(-1);
    }
    return f;
}

let arr1 = [0, 1, -1, -2];
let arr2 = [];

for (let i = 0, endI = arr1.length; i < endI; i++){
    arr2[i]=absValue(arr1[i]);
    console.log (`Модуль числа ${arr1[i]} = ${arr2[i]}`);
}


console.log("Задание №2 \n");
function isPalindrome(str)
{
    let arr = str.split("");
    let long, equally=0;
    //console.log(arr);
    arr.reverse (arr);
    //console.log(arr);
    long = str.length;
    for (let i=0; i<long; i++)
    {
        if (arr[i]==str[i])
        {
            equally++;
        }
    }
    if (equally==long)
    {
        console.log(`Слово "${str}" + является полиномом - true`)
    }
    else 
    {
        console.log(`Слово "${str}" является полиномом? - false`)
    }

}

let h='довод', k='кружка';
isPalindrome(h);
isPalindrome(k);



console.log("Задание №3 \n");
function matrixAddition(arr1, arr2)
{
    let size1 = arr1.length; //строки
    let size2 = arr2.length; //строки

    let long1 = arr1[0].length; //стобцы
    let long2 = arr2[0].length; //столбцы

    let sumArr="";
    let r=0;

    console.log(arr1);
    console.log(arr2);


  if (size1 == size2 && long1 == long2)
    {
       for ( let i =0; i<long1; i++)
       {
           for ( let j=0; j<size1; j++)
           {
               r = arr1[i][j] + arr2[i][j];
               sumArr += r + "\t";
           }
           sumArr += "\n";
       }

        console.log(`Cумма двух массивов =\n ${sumArr}` )
    }
    else
    {
        console.log("Операция невыполнима")
    }

}

let array1 = [[1,2],[3,4]];
let array2 = [[9,8],[7,6]];
let array3 = [[1,2]];

matrixAddition(array1, array2);
matrixAddition(array1, array3);


console.log("Задание №4 \n");

let student = {
    group: 305,
    last_name: "Иванов",
    first_name: "Иван"
};
console.log ("Список свойств: " + Object.keys(student));
console.log(`Cтудент ${student.last_name} ${student.first_name} учится в ${student.group} группе`);

let student1 = {
    group: 324,
    last_name: "Горячий",
    first_name: "Перец"
};

console.log (`Список свойств: ${Object.keys(student1)}`);
console.log(`Cтудент ${student1.last_name} ${student1.first_name} учится в группе ${student1.group}`);