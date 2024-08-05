document.querySelector('#verify-button').addEventListener('click', function() {
    const select1 = document.querySelector('#select1').value;
    const select2 = document.querySelector('#select2').value;
    const select3 = document.querySelector('#select3').value;

    const password = select1 + select2 + select3;
    const resultText = document.querySelector('#result-text');

    if (password === '911') {
        resultText.innerHTML = 'password 1 correcto';
    } else if (password === '714') {
        resultText.innerHTML = 'password 2 es correcto';
    } else {
        resultText.innerHTML = 'password incorrecto';
    }
});
