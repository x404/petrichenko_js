function isPangram(string) {
    const alphabetSize = 26;
    const newStr = string.toLowerCase()
                            .split(' ')
                            .join('');
    const set = new Set(newStr);
    return set.size === alphabetSize;
}

isPangram("The quick brown fox jumps over the lazy dog"); //?
isPangram("Hello world"); //?