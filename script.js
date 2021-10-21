let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


function printAllElements() {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i])
    }
}

function add() {
    array.push(15)
}

function deleteArray() {
    array.shift()
}

function printAfter() {
    for (let i = 3; i < array.length; i++) {
        console.log(array[i])
    }
}

function printforeach() {
    array.forEach(number => {
        console.log(number);
    })
}


function Sum(a, b) {
    if (a == b) {
        console.log(a * 3)
    } else {
        console.log(a + b);
    }
}