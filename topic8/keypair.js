const { generateKeyPairSync } = require('crypto');

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 2048, // the length of your key in bits
  publicKeyEncoding: {
    type: 'spki', // recommended to be 'spki' by the Node.js docs
                  // Simple public key infrastructure (Spoo Key)
    format: 'pem', // Privacy-Enhanced Mail == pem
  },
  privateKeyEncoding: {
    type: 'pkcs8', // recommended to be 'pkcs8' by the Node.js docs
                   // Public-Key Cryptography Standards  - PKCS #8 is a 
                   // standard syntax for storing private key information - RSA
                   // RSA - Ron Rivest, Adi Shamir and Leonard Adleman Securoty - encryption standards
    format: 'pem',
    // cipher: 'aes-256-cbc',
    // passphrase: 'top secret'
  },
});

// console.log(publicKey);
// console.log(privateKey);

module.exports = {
    privateKey, publicKey
}

