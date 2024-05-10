# Node Files
---
This repository contains a set of Node.js scripts that mimic the functionality of the standard UNIX utility, cat. The scripts allow you to read the contents of files or URLs and print them to the console or write them to a file.

## Setup
1. Run `npm init` to create a new Node.js project
2. Initialize a git repository in your project folder
3. Add `node_modules` to a `.gitignore` file to exclude dependencies from version control

## Steps
### Step 1
In step1.js, a function cat is defined. It takes one argument, path, and reads the file with that path, printing its contents to the console. If the file doesn't exist, it prints an error message
### Step 2
The code from `step1.js` is copied to `step2.js`. Additionally, a new function `webCat` is added. This function takes a URL as an argument, uses axios to read the content of the URL, and prints it to the console. The script determines whether the argument is a file path or a URL and calls either `cat` or `webCat` accordingly. If there is an error fetching the page, it prints an error message.
### Step 3
The code from `step2.js` is copied to `step3.js`. A new feature is added to allow specifying an output file using the `--out` flag followed by the output filename. The script then writes the content to the specified file instead of printing it to the console. Error handling is implemented to deal with issues such as non-existent directories or permission errors when writing to the file.
### Step 4: Handling Multiple Files and URLs with an Output File
In step 4, we enhanced the script to handle multiple file paths and URLs provided as command-line arguments. Additionally, we added support for specifying a single output file to which the contents of all files or URLs will be appended.
#### Usage
To run the script with multiple files or URLs and specify an output file, use the following command:
> `node step4.js [--out output-file] file1 file2 ... fileN ` 
Replace output-file with the desired output filename and provide the paths of the files or URLs you want to read.

## Code Structure
To adhere to best practices and minimize code duplication, the functions are designed to be small, testable, and focused on doing one thing. Efforts are made to reduce redundancy throughout the codebase.