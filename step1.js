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
// cat('one.txt');

if(process.argv.length !== 3) {
    console.error('Usage: please provided a <file> to read!')
    process.exit(1);
};


const filename = process.argv[2];
cat(filename);