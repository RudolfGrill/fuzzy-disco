function createGitBranchName(ticketNumber, sentence) {
    // Convert the sentence to kebab-case
    const kebabCaseSentence = sentence
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-') // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, '');   // Remove leading and trailing hyphens

    // Combine the ticket number and kebab-case sentence
    const gitBranchName = `${ticketNumber}-${kebabCaseSentence}`;

    return gitBranchName;
}

// Example usage:
const ticketNumber = "TICKET-123";
const sentence = "This is an example sentence";
const gitBranchName = createGitBranchName(ticketNumber, sentence);
console.log(gitBranchName); // Outputs: "TICKET-123-this-is-an-example-sentence"
