function nthPrime(n) {
    let i = 0;
    let num = 2;

    while (i !== n) {
        if (isPrime(num)) {
            i++;
        }
        num++; 
    }

    return num - 1;
}

function isPrime(x) {
    if (x <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(x); i++) {
        if (x % i === 0) {
            return false;
        }
    }

    return true;
}

function calculateNthPrime() {
    const nInput = document.getElementById('nInput');
    const nValue = parseInt(nInput.value);
    
    if (!isNaN(nValue) && nValue > 0) {
        const result = nthPrime(nValue);
        document.getElementById('result').textContent = `R: ${result}`;
    } else {
        alert('error');
    }
}