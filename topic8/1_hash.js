const { createHash } = require('crypto');

// Create a string hash
// sha256
// widely used algo - bitcoin
function hash(input) {
    return createHash('sha256').update(input).digest('hex');
}

let password = '12345';
const hash1 = hash(password);
console.log(hash1)

/// ... some time later

password = '12345';
const hash2 = hash(password);
const match = hash1 === hash2;

console.log(match ? 'good password' : 'password does not match');


