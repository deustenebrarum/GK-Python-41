// const array = []

// for (let i = 0; i < 5; i++) {
//     array.push(Math.round(Math.random() * 100))
// }

// console.log(array)

// const filtered_array = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 == 0) {
//         filtered_array.push(array[i])
//     }
// }

// console.log(filtered_array)

// for (let i = 0; i < filtered_array.length; i++) {
//     filtered_array[i] = `${filtered_array[i]}$`;
// }

// console.log(filtered_array)

// let sum = 0;

// for (let i = 0; i < array.length; i++) {
//     sum += array[i];
// }

// console.log(sum)

const array = [];
for (let _ = 0; _ < 100; _++) {
    array[_] = (Math.random());
}

console.log(array.length);

let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

console.log(sum / array.length);
