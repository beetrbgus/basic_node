var figlet  = require('figlet');

figlet('KgilKgilS!!', function(err, data) {
    if(err) {
        console.log('Something went wrong...');
        console.dir(err);
        return ;
    }
    console.log(data)
});