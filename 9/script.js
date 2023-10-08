function specialPythagoreanTriplet(n) {
    let a,b,c;

    for ( a = 1; a < n/2; a++) {
        for ( b = a + 1; b < n/2; b++) {
             c = n - a - b;
            if (a **2 + b **2 === c **2) {
                return a*b*c;
            }
        }
    }

    return -1;
}
function calculateSpecialPythagoreanTriplet() {
    const nInput = document.getElementById('nInput');
    const nValue = parseInt(nInput.value);

    if (!isNaN(nValue) && nValue > 0) {
        const result = specialPythagoreanTriplet(nValue);
        document.getElementById('result').textContent = `The product of abc for a + b + c = ${nValue} is: ${result}`;
    } else {
        alert('Please enter a valid positive integer.');
    }
}
