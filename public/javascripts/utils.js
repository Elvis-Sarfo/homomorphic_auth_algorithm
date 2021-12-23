String.prototype.hashCode = function () {
    var hash = 0, i, chr;
    if (this.length === 0) return hash;
    for (i = 0; i < this.length; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << 5) - hash) + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
};


/**
 * Generate a random number
 * @param {int} min The minimum number in the range. The defualt value of this parameter is 0
 * @param {int} max The maximum number in the range. The defualt value of this parameter is 100
 * @returns {int} The random number
 */
function getRandomNumber(min = 1000000000, max = 2000000000) {
    return new BigNumber(Math.floor(Math.random() * (max - min) + min)) ;
}

/**
 * Converts a string to an ASCII string
 * @param {string} str The string value you want to convert
 * @returns {string} The ASCII string
 */
function convertStringtoAsciiString(str, _padding) {
    _str = str.substring(0, str.length - _padding.length);
    let asciiValue = '';
    for (let i = 0; i < _str.length; i++) {
        if (asciiValue == '') {
            asciiValue = asciiValue + _str.charCodeAt(i);
        } else {
            asciiValue = asciiValue + " " + _str.charCodeAt(i);
        }
    }
    // let paddingEncript = _padding.hashCode();
    return asciiValue;
}

function convertAsciiToString(asciiValue) {
    let str = '';
    let asciiArray = asciiValue.split(' ');
    let padding = asciiArray.pop();
    for (let i = 0; i < asciiArray.length; i++) {
        str = str + String.fromCharCode(parseInt(asciiArray[i]));
    }
    return str.trim() + padding;
}

/**
 * Converts a string to an ASCII Array
 * @param {string} str The string value you want to convert
 * @returns {Array} The an array of ascii values
 */
function convertStringtoAsciiArray(str) {
    let asciiArray = [];
    for (let i = 0; i < str.length; i++) {
        asciiArray.push(str.charCodeAt(i));
    }
    return asciiArray;
}

/**
 * Convert ASCII string to number asciiString The ASCII string you want to convertasciiString The ASCII string you want to convert
 * @returns {Array<int>} The array of numbers
 */
function convertAsciiToArray(asciiString) {
    // convert the to ascii string to array
    let arr = asciiString.split(' ');
    let padding = asciiArray.pop();
    // loop over the array and convert the items to integer
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i]);
    }
    return arr + padding;
}

/**
 * encrypt the ASCII string using the homomorphic algorithm
 * @param {String || Array} asciiString The ascii string or array you want to encrypt
 */
function encryptAsciiString(ascii, p, r, _padding) {
    let encryptedString = '';
    let asciiArray = ascii.split(' ');
    const bigP = new BigNumber(p);
    const bigR = new BigNumber(r);
    const bigPadding = new BigNumber((_padding));
    for (let i = 0; i < asciiArray.length; i++) {
        // The encryption algoritm itself
        let a = new BigNumber(parseInt(asciiArray[i]));

        const encryptedChar = bigP.multipliedBy(bigR).plus(a);
        encryptedString = encryptedString + ' ' + encryptedChar;
    }
    let encryptedPadding = bigP.multipliedBy(bigR).plus(bigPadding);
    encryptedString = encryptedString + ' ' + encryptedPadding;
    return encryptedString.trim();
}

function decryptToAsciiString(ascii, p) {
    let decryptedString = '';
    let asciiArray = ascii.split(' ');
    // let encryptedPadding = asciiArray.pop();
    for (let i = 0; i < asciiArray.length; i++) {
        // The encryption algoritm itself
        const a = new BigNumber(asciiArray[i]);
        const bigP = new BigNumber(p).toString();
        const encryptedChar = a.modulo(bigP);
        decryptedString = decryptedString + ' ' + encryptedChar;
    }
    return decryptedString.trim();
}