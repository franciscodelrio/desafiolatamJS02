document.querySelector('#verify-button').addEventListener('click', function() {
    const input1 = document.querySelector('#input1').value;
    const input2 = document.querySelector('#input2').value;
    const input3 = document.querySelector('#input3').value;

    let total = 0;
    let isEmpty = true;

    if (input1 !== '') {
        total += parseInt(input1);
        isEmpty = false;
    }
    if (input2 !== '') {
        total += parseInt(input2);
        isEmpty = false;
    }
    if (input3 !== '') {
        total += parseInt(input3);
        isEmpty = false;
    }

    const resultText = document.querySelector('#result-text');
    if (isEmpty || total <= 0) {
        resultText.innerHTML = 'No llevas ningún sticker';
    } else if (total > 10) {
        resultText.innerHTML = 'Llevas demasiados stickers';
    } else {
        resultText.innerHTML = `Llevas ${total} stickers`;
    }
});
