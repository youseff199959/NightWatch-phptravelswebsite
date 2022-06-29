// Requiring fs module in which
// writeFile function is defined.


module.exports = {
    writeInFile : function(data){
        const fs = require('fs')

        fs.appendFile('login.txt', "\n" + data, (err) => {
      
            // In case of a error throw err.
            if (err) throw err;
        })
    }
}




