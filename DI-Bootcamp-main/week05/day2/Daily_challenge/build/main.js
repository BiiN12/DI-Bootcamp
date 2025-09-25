"use strict";
// Daily Challenge: Union Type Validator
Object.defineProperty(exports, "__esModule", { value: true });
function validateUnionType(value, allowedTypes) {
    const valueType = typeof value;
    const isValid = allowedTypes.some(type => valueType === type);
    return isValid;
}
console.log(validateUnionType(42, ['string', 'number'])); // true
console.log(validateUnionType('Hello', ['boolean', 'number']));
//# sourceMappingURL=main.js.map