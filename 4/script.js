/*
function largestPalindromeProduct(n) {
    let max = 1;
    for (let i = 0; i < n; i++) {
      max *= 10;
    }
    max -= 1;

    for (let i = max; i > 0; i--) {
      for (let j = i; j > 0; j--) {
        if (esPalindromo(i * j)) {
          return i * j;
        }
      }
    }
  
    return -1;
  }
  */

  function largestPalindromeProduct(n) {
    let max = 1;
    for (let i = 0; i < n; i++) {
      max *= 10;
    }
    max -= 1;
  
    let largestPalindrome = 0;
  
    for (let i = max; i > 0; i--) {
      for (let j = i; j > 0; j--) {
        const product = i * j;
        if (esPalindromo(product) && product > largestPalindrome) {
          largestPalindrome = product;
        }
      }
    }
  
    return largestPalindrome;
  }
  
  function esPalindromo(num) {
    let n = num.toString();
  
    for (let k = 0; k < n.length / 2; k++) {
      if (n[k] !== n[n.length - k - 1]) {
        return false;
      }
    }
  
    return true;
  }
  

const inputNumber = document.getElementById("inputNumber");
const calculateButton = document.getElementById("calculateButton");
const resultElement = document.getElementById("result");
const outputElement = document.getElementById("output");

calculateButton.addEventListener("click", () => {
    const n = parseInt(inputNumber.value);
    const result = largestPalindromeProduct(n);
  
    outputElement.textContent = result;
  });
  