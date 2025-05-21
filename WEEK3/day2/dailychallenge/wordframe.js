// Function to create a framed display of words
function createWordFrame(input) {
    // Input validation
    if (!input || input.trim() === '') {
        console.log('Error: Please provide some words!');
        return false;
    }

    // Split the input string by commas and trim whitespace
    const words = input.split(',')
        .map(word => word.trim())
        .filter(word => word !== ''); // Remove empty entries

    // Validate we have at least one word after filtering
    if (words.length === 0) {
        console.log('Error: No valid words found!');
        return false;
    }

    // Find the longest word length
    const maxLength = Math.max(...words.map(word => word.length));
    
    // Create the top/bottom border
    const border = '*'.repeat(maxLength + 4);
    const emptyLine = `*${' '.repeat(maxLength + 2)}*`;
    
    // Print the frame
    console.log('\nYour framed words:');
    console.log(border);
    console.log(emptyLine); // Add empty line for better aesthetics
    
    // Print each word with side borders
    words.forEach(word => {
        const padding = maxLength - word.length;
        const leftPad = Math.floor(padding / 2);
        const rightPad = padding - leftPad;
        console.log(`* ${' '.repeat(leftPad)}${word}${' '.repeat(rightPad)} *`);
    });
    
    console.log(emptyLine); // Add empty line for better aesthetics
    console.log(border);

    // Print statistics
    console.log('\nStatistics:');
    console.log(`Total words: ${words.length}`);
    console.log(`Longest word: "${words.reduce((a, b) => a.length > b.length ? a : b)}" (${maxLength} characters)`);
    console.log(`Shortest word: "${words.reduce((a, b) => a.length < b.length ? a : b)}" (${words.reduce((a, b) => a.length < b.length ? a : b).length} characters)`);
    
    return true;
}

// Function to process user input
function processInput(input) {
    // Remove any special characters except letters, numbers, spaces, and commas
    const cleanInput = input.replace(/[^a-zA-Z0-9\s,]/g, '');
    
    if (cleanInput !== input) {
        console.log('\nNote: Special characters were removed from your input.');
    }
    
    return createWordFrame(cleanInput);
}

// Get input from user
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to Word Framer!');
console.log('Enter your words separated by commas, or type "exit" to quit.\n');

function promptUser() {
    readline.question('Please enter words separated by commas: ', (input) => {
        if (input.toLowerCase().trim() === 'exit') {
            console.log('\nThank you for using Word Framer! Goodbye!');
            readline.close();
            return;
        }

        const result = processInput(input);
        
        // If there was an error or the user wants to continue
        console.log('\nPress Enter to frame more words, or type "exit" to quit.');
        promptUser();
    });
}

promptUser(); 