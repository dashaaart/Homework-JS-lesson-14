// Дан массив [1, 2, 3, 4, 5]. С помощью метода splice запишите 
// в новый элементы [1, 2, 10, 11, 5].

var arr = [1, 2, 3, 4, 5];

var removeElements = arr.splice(2, 2);

var addElements = arr.splice(2, 0, 10, 11);

alert(arr);