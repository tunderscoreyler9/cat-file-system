const fs = require('fs');

function cat(path) {
    fs.access(path, fs.constants.F_OK, (err) => {
        if(err) {
            console.error(`Error reading ${path}`);
            console.error(err);
            process.exit(1);
        }
    });

    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.error(err);
            process.exit(1);
        }
        console.log(`File contents: ${data}`);
    });
};
// cat('one.txt');

if(process.argv.length !== 3) {
    console.error('Error: please provided a <file> to read!')
    process.exit(1);
};

const filename = process.argv[2];
cat(filename);