validateFullName = (name) => {
    const fullName = name.split(" ");
    let isValid = false;

    fullName.length <=2 ? (
        isValid = validator.isAlpha(fullName[0]) && validator.isLength(fullName[0],{min:3,max:30}),
        fullName[1] ? isValid = validator.isAlpha(fullName[1]) : ''
    ) : '';

    return isValid;
}