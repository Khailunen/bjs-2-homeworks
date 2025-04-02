function parseCount(value){
    const valueParsing = Number.parseFloat(value);
    if (Number.isNan(value)){
        const error = new Error("Невалидное значение");
        throw error;
    }
    return valueParsing;
}

// function validateCount(value){
//     try{
//         const valueParsing = parseCount(value);
//     } catch (error) {
//         return error;
//     }finally{
//         return valueParsing;
//     }
// }