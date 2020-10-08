export const checkIf = n => {
    const squareRt = Math.sqrt(n);
    for (var i = 2; i <= squareRt; i++) {
        if (n % i === 0) {
            return false
        }
    }
    return n > 1
}

export const primeNumbers = n => {
    const numbers = [];

    var counter = 0;
    while (numbers.length < n) {
        if (checkIf(counter)) {
            numbers.push(counter);
        }

        counter++;
    }

    return numbers;
}

export const multiplicationTable = (n) => {
    const table = [];
    const newTable = primeNumbers(n);
    table.push(['', ...newTable]);
    for (var number of newTable) {
        const row = [number]
        for (var secondNumber of newTable) {
            row.push(number*secondNumber);
        }
        table.push(row);
    }
    return table;
}