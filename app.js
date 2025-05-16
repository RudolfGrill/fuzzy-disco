function createGitBranchName(ticketNumber, sentence) {
    // Convert the sentence to kebab-case
    const kebabCaseSentence = sentence
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, '');   // Remove leading and trailing hyphens

    // Capitalize the first letter of the kebab-case sentence
    const capitalizedKebabCaseSentence = kebabCaseSentence.charAt(0).toUpperCase() + kebabCaseSentence.slice(1);

    // Combine the ticket number and the processed sentence
    const gitBranchName = `${ticketNumber.toUpperCase()}-${capitalizedKebabCaseSentence}`;

    return gitBranchName;
}

// Get inputs from command line arguments
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error("Usage: node createGitBranch.js <ticketNumber> <sentence>");
    process.exit(1);
}

const ticketNumber = args[0];
const sentence = args.slice(1).join(' '); // Join the rest of the arguments as a sentence

const gitBranchName = createGitBranchName(ticketNumber, sentence);
console.log(gitBranchName);
