const validatePassword = password => {
    return validateLength(password)
        && validateUpperCase(password)
        && validateLowerCase(password)
        && validateNumber(password)
        && validateSpecialCharacters(password);
};

const validateLength = password => {
    return password.length > 8;
};

const validateUpperCase = password => {
    const re = new RegExp("[A-Z]");
    return re.test(password);
};

const validateLowerCase = password => {
    const re = new RegExp("[a-z]");
    return re.test(password);
};

const validateNumber = password => {
    const re = new RegExp("[0-9]");
    return re.test(password);
};

const validateSpecialCharacters = password => {
    const re = new RegExp("_");
    return re.test(password);
};

console.log(`1. No length "Ab1_Ab1_": ${validatePassword("Ab1_Ab1_")}`);
console.log(`2. No upper case "ab1_ab1_a": ${validatePassword("ab1_ab1_a")}`);
console.log(`3. No lower case "AB1_AB1_C": ${validatePassword("AB1_AB1_C")}`);
console.log(`4. No number "Abc_Abc_a": ${validatePassword("Abc_Abc_a")}`);
console.log(`5. No special characters "Ab12Ab12a": ${validatePassword("Ab12Ab12a")}`);
console.log(`6. Ok "Ab1_Ab1_a": ${validatePassword("Ab1_Ab1_a")}`);