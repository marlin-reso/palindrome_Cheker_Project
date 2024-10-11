function cleanString(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    return str.replace(/[^A-Za-z0-9]/g, '').toLowerCase();
}

function isPalindrome(input) {
    const cleanedInput = cleanString(input);
    const reversedInput = cleanedInput.split('').reverse().join('');
    return cleanedInput === reversedInput;
}

document.getElementById('check-btn').addEventListener('click', function() {
    const inputText = document.getElementById('text-input').value;
    const result = document.getElementById('result');

    // Check if input is empty
    if (!inputText) {
        alert("Please input a value");
        return;
    }

    // Check if input is a palindrome
    const palindromeCheck = isPalindrome(inputText);
    
    if (palindromeCheck) {
        result.textContent = `${inputText} is a palindrome`;
    } else {
        result.textContent = `${inputText} is not a palindrome`;
    }
});
