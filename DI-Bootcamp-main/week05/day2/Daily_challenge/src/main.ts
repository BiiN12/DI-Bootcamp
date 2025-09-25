// Daily Challenge: Union Type Validator

function validateUnionType(value: any, allowedTypes: string[]): boolean {
    const valueType = typeof value;
    const isValid = allowedTypes.some(type => valueType === type);
    return isValid;
}

console.log(validateUnionType(42, ['string', 'number'])); // true
console.log(validateUnionType('Hello', ['boolean', 'number']));