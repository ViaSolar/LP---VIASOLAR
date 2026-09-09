const fs = require('fs');
if (!fs.existsSync('./pacote-cpanel')) fs.mkdirSync('./pacote-cpanel');
fs.copyFileSync('./dist/index.html', './pacote-cpanel/index.html');
console.log('Site copiado para pacote-cpanel!');
