window.onload = (e) => {
  let PADDING = '';
  let text = '';
  let ascii = '';
  let encryption = '';
  let _decryption = '';
  let decryption = '';
  let p = getRandomNumber(), r = getRandomNumber(), q = getRandomNumber();
  let data = [];

  // Get the DOM elements
  let txtP = document.getElementById('p');
  let txtQ = document.getElementById('q');
  // let txtR = document.getElementById('r');
  let txtInput = document.getElementById('txtInput');
  let btnEncypt = document.getElementById('btnEncypt');
  let tblBody = document.querySelector('table tbody');
  // let btnClear = document.getElementById('btnClear');

  // set the input values to the generated values to the elements
  txtP.value = p;
  txtQ.value = q;
  // txtR.value = r;

  btnEncypt.addEventListener('click', (e) => {
    e.preventDefault();
    let _padding = PADDING.toString();
    ascii = convertStringtoAsciiString(text + _padding);
    encryption = encryptAsciiString(ascii.trim(), p, q, r);
    let _asciiString = decryptToAsciiString(encryption.trim(), p);
    _decryption = convertAsciiToString(_asciiString);
    decryption = _decryption.substring(0, _decryption.length - _padding.length);
    data.push({ text, ascii, encryption, decryption, padding: _padding, _decryption });
    console.log(data);

    tblBody.innerHTML = tblBody.innerHTML + `<tr><td>${text}</td> <td>${_padding}</td> <td>${encryption}</td><td>${_decryption}</td></tr>`


  });

  txtInput.addEventListener('input', () => {
    PADDING = txtInput.value.trim().hashCode();
    text = txtInput.value.trim();
  });
};