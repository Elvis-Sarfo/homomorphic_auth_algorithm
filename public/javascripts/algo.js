
window.onload = (e) => {
    // todo: Padding should be the harsh value of the message itself
    let PADDING = 'abc';

    let txtP = document.getElementById('p');
    let txtQ = document.getElementById('q');
    let txtR = document.getElementById('r');

    let txtInput = document.getElementById('txtInput');
    let txtEncrypted = document.getElementById('txtEncrypted');
    let txtDecrypted = document.getElementById('txtDecrypted');
    let txtAscii = document.getElementById('txtAscii');

    // let btnClear = document.getElementById('btnClear');
    let btnEncypt = document.getElementById('btnEncypt');
    let btnDecypt = document.getElementById('btnDecypt');
    let btnAscii = document.getElementById('btnAscii');

    txtP.value = getRandomNumber();
    txtQ.value = getRandomNumber();
    txtR.value = getRandomNumber();

    btnEncypt.addEventListener('click', (e) => {
        e.preventDefault();
        let asciiString = convertStringtoAsciiString(txtInput.value.trim());
        txtEncrypted.value = encryptAsciiString(
            asciiString,
            parseInt(txtP.value),
            parseInt(txtQ.value),
            parseInt(txtR.value)
        );
    });

    btnDecypt.addEventListener('click', (e) => {
        e.preventDefault();
        let _asciiString = decryptToAsciiString(txtEncrypted.value.trim(), parseInt(txtP.value));
        txtDecrypted.value = convertAsciiToString(_asciiString);
    }); PADDING

    btnAscii.addEventListener('click', (e) => {
        e.preventDefault();
        let _asciiString = convertStringtoAsciiString(txtInput.value.trim() + PADDING);
        txtAscii.value = _asciiString
    });

    txtInput.addEventListener('input', () => {
        PADDING = txtInput.value.trim().hashCode();
        console.log('****************************************', PADDING);
        let _asciiString = convertStringtoAsciiString(txtInput.value.trim() + PADDING);
        txtAscii.value = _asciiString;

        let nonPaddingText = convertAsciiToString(_asciiString);

        console.log(nonPaddingText);
        console.log(nonPaddingText.substring(0, nonPaddingText.length - PADDING.length));
        console.log('----------------------------------------------------------------')
    });

    txtAscii.addEventListener('input', () => {
        let _asciiString = txtAscii.value.trim();
        if (_asciiString != '')
            txtInput.value = convertAsciiToString(_asciiString);
        else txtInput.value = '';
    });
};

