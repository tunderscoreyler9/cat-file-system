const fs = require('fs');
const axios = require('axios');
const process = require('process');

// Handle output: write to file is out is given; else, print.
function handleOutput(text, out) {
    if(out) {
        fs.writeFile(out, text, 'utf8', function(err) {
            if(err) {
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(text);
    };
};


// Read file at path and print it out:
function cat(path, out) {
    fs.readFile(path, 'utf8', (err, data) => {
        if(err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        }
        else {
            handleOutput(data, out);
        };
    });
};



// Webcat:
async function webCat(url, out) {
    try {
        const response = await axios.get(url);
        handleOutput(response.data, out);
    } catch(error) {
        console.error(`Error fetching URL '${url}'`);
        console.error(error.message);
        process.exit(1);
    };
};


let path;
let out;

if(process.argv[2] === '--out') {
    out = process.argv[3];
    path = process.argv[4];
} else {
    path = process.argv[2];
};

if(path.slice(0, 4) === 'http') {
    webCat(path, out);
} else {
    cat(path, out);
};