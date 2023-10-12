const validatePassword = password => {
    return validateLength(password)
        && validateUpperCase(password)
        && validateLowerCase(password)
        && validateNumber(password)
        && validateSpecialCharacters(password);
};

/** Validates if the password meets with the length */
const validateLength = password => {
    return password.length > 8;
};

/** Validates if the password includes at least one capital letter */
const validateUpperCase = password => {
    const re = new RegExp("[A-Z]");
    const count = countMatches(password, re);
    return count > 0;
};

/** Validates if the password includes at least one lowercase letter */
const validateLowerCase = password => {
    const re = new RegExp("[a-z]");
    const count = countMatches(password, re);
    return count > 0;
};

/** Validates if the password includes at least one number */
const validateNumber = password => {
    const re = new RegExp("[0-9]");
    const count = countMatches(password, re);
    return count > 0;
};

/** Validates if the password includes an '_' (underscore character) */
const validateSpecialCharacters = password => {
    const re = new RegExp("_");
    const count = countMatches(password, re);
    return count === 1;
};

/** Counts the occurrences of a regular expression in a string */
const countMatches = (str, regex) => {
    let count = 0;
    str.split('').map( letter => {
        if (regex.test(letter)) {
            count++;
        }
    });
    return count;
}

/** Test cases */
console.log(`1. No length "Ab1_": ${validatePassword("Ab1_")}`);
console.log(`2. No upper case "ab1_ab1_a": ${validatePassword("ab1_ab1_a")}`);
console.log(`3. No lower case "AB1_AB1_C": ${validatePassword("AB1_AB1_C")}`);
console.log(`4. No number "Abc_Abc_a": ${validatePassword("Abc_Abc_a")}`);
console.log(`5. No special characters "Ab12Ab12a": ${validatePassword("Ab12Ab12a")}`);
console.log(`6. More than one special characters "Ab1_Ab1_a": ${validatePassword("Ab1_Ab1_a")}`);
console.log(`7. Ok "Ab1_cD2ef": ${validatePassword("Ab1_cD2ef")}`);
