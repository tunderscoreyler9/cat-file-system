const fs = require('fs');
const axios = require('axios');

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

if(process.argv.length !== 3) {
    console.error('Error: please provided a <file> to read!')
    process.exit(1);
};

const filename = process.argv[2];
cat(filename);


// Webcat:
async function webCat(url) {
    try {
        const response = await axios.get(url);
        console.log(response.data);
    } catch(error) {
        console.error(`Error fetching URL '${url}'`);
        console.error(error.message);
        process.exit(1);
    };
};