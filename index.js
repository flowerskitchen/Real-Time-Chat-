// Real-Time Chat Message Logger

const fs = require('fs');
const path = require('path');

// Log file path
const logFile = path.join(__dirname, 'chat_log.txt');



// Function to log chat messages
function logMessage(user, message) {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] ${user}: ${message}\n`;
    fs.appendFile(logFile, logEntry, (err) => {
        if (err) console.error('Error writing to log file:', err);
    });
}

// Simulated users and messages
const users = ['Alice', 'Bob', 'Charlie', 'David'];
const messages = [
    'Hello everyone!',
    'How are you?',
    'This is a test message.',
    'What are you up to?',
    'Let’s meet up later.',
    'That sounds great!',
    'I am busy at the moment.',
    'See you soon!',
    'Goodbye!',
];

function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Function to generate and log random chat messages
function logRandomChatMessage() {
    const user = getRandomElement(users);
    const message = getRandomElement(messages);
    logMessage(user, message);
    console.log(`Chat Log - ${user}: ${message}`);
}

// Schedule chat message logging
setInterval(logRandomChatMessage, 3000); // Every 3 seconds

// Initial log message
logMessage('System', 'Chat Logger started.');
console.log('Chat Logger started.');

// Stop after 1 minute
setTimeout(() => {
    logMessage('System', 'Chat Logger stopped.');
    console.log('Chat Logger stopped.');
    process.exit(0);
}, 60000);
