const fs = require('fs');

function cat(path) {
    fs.readFile(path, 'utf8', function(err, data) {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`File contents: ${data}`);
    });
};
cat('one.txt');