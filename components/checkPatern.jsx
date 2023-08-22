export function checkPattern(inputString) {
    const pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[a-zA-Z]).{8,}$/; // Replace with your desired regex pattern

    return pattern.test(inputString);
}

export function checkPhoneNumber(inputString) {
    const pattern = /^09\d{9}$/;

    return pattern.test(inputString);
}
