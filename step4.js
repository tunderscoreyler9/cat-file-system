const fs = require('fs');
const axios = require('axios');
const process = require('process');


function handleOutput(text, out) {
    if (out) {
        fs.appendFile(out, text, 'utf8', function(err) {
            if (err) {
                console.error(`Couldn't write ${out}: ${err}`);
                process.exit(1);
            }
        });
    } else {
        console.log(text);
    }
};


function cat(path, out) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(`Error reading ${path}: ${err}`);
            process.exit(1);
        } else {
            handleOutput(data, out);
        }
    });
};


async function webCat(url, out) {
    try {
        const response = await axios.get(url);
        handleOutput(response.data, out);
    } catch(error) {
        console.error(`Error fetching URL '${url}': ${error.message}`);
        process.exit(1);
    };
};


let out;
const files = [];
for (let i = 2; i < process.argv.length; i++) {
    if (process.argv[i] === '--out') {
        out = process.argv[i + 1];
        i++;
    } else {
        files.push(process.argv[i]);
    }
}


files.forEach(path => {
    if (path.slice(0, 4) === 'http') {
        webCat(path, out);
    } else {
        cat(path, out);
    }
});

// Example:
// node step4.js --out three.txt one.txt two.txt
// appends the contents from one.txt and two.txt into a new file, three.txt