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
function primeSummation(n) {

    let sum=0;
    
    for(let i=0; i<n ;i++){
        if(isPrime(i)){
            sum+=i;
        }
    }

    return sum;
}

function calculatePrimeSum() {
    const n = parseInt(document.getElementById("n").value);
    const result = primeSummation(n);
    document.getElementById("result").textContent = result;
    document.getElementById("inputN").textContent = n;
}

