const bcrypt = require('bcrypt');
const saltRounds = 8;
const myPlaintextPassword = '123456';
let pass = '$2b$08$8Esd.ByZMR939TBftBO.QOtDpN6Myd7jgJqz3n3l3xQxvpg5yGZem';

 
pass = bcrypt.hashSync(myPlaintextPassword, saltRounds)

console.log(pass);
bcrypt.compare(myPlaintextPassword, pass).then(function(result) {
    console.log(result);
});