// Requiring fs module in which
// writeFile function is defined.


module.exports = {
    appendInFile : function(data){
        const fs = require('fs')

        fs.appendFile('login.txt', "\n" + data, (err) => {
      
            // In case of a error throw err.
            if (err) throw err;
        })
    },
    writeInFile : function(data){
        const fs = require('fs')

        fs.writeFile('login.txt', data, (err) => {
      
            // In case of a error throw err.
            if (err) throw err;
        })
    },
    ReadFile(filename) {
        const fs = require('fs')
        const contents = fs.readFileSync(filename, 'utf-8');
        const arr = contents.split('\n');
        return arr;
      }
}




