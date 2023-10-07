function sumSquareDifference(n) {
    let n1 = 0;
    let n2 = 0;

    for (let i = 1; i <= n; i++) {
        n1 += (i ** 2);
        n2 += i;
    }
    
    return n2 ** 2 - n1;
}

function calculateSumSquareDifference() {
    const nInput = document.getElementById('nInput');
    const nValue = parseInt(nInput.value);
    
    if (!isNaN(nValue)) {
        document.getElementById('nValue').textContent = nValue;
        const result = sumSquareDifference(nValue);
        document.getElementById('result').textContent = result;
    } else {
        alert('error');
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const nValue = 10; // Cambia el valor de n según lo que desees
    document.getElementById('nInput').value = nValue;
});

