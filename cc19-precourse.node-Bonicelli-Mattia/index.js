let crypto = require('crypto');

console.log('Hey there! It looks like `Node.js` has been installed correctly! Good job!');

if (process.argv.length == 3 && process.argv[2] == 'getSecretCode') {
    let secretCode = crypto.createHmac('sha256', 'fishsticks')
        .update('Welcome to CC!')
        .digest('hex');
    console.log(secretCode.substr(0, 8));
}


