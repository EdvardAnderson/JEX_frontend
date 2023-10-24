const pem = require('pem');
const fs = require('fs');

const pfxFilePath = 'certificate.pfx';
const password = 'JEX'; 
const pemFilePath = 'self-signed-certificate.pem'; 

pem.readPkcs12(fs.readFileSync(pfxFilePath), { p12Password: password }, (err, cert) => {
    if (err) {
        console.error('Certificate conversion error:', err);
    } else {
        fs.writeFileSync(pemFilePath, cert.cert);
        console.log('Certificate conversion complete.');
    }
});