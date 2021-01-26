const snakeToCamel = (str) => str.replace(/([-_]\w)/g, (group) => group[1].toUpperCase());
const isDate = (date) => typeof date === 'string' && (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
const isNumeric = (str) => {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
           !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

export {
    snakeToCamel,
    isDate,
    isNumeric,
}
