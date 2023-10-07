function smallestMult(n) {
    let num = n;

    for (let i = 2; i <= n; i++) {
        while (num % i !== 0) {
            num += n;
        }
    }

    return num;
}

function calculateSmallestMultiple() {
    const inputNumber = document.getElementById('inputNumber');
    const resultDiv = document.getElementById('result');
    const n = parseInt(inputNumber.value);

    if (!isNaN(n)) {
        const smallestMultiple = smallestMult(n);
        resultDiv.textContent = `The smallest multiple divisible by all numbers from 1 to ${n} is:
        ${smallestMultiple}`;
    } else {
        resultDiv.textContent = 'invalid number';
    }
}