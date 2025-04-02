function parseCount(value){
    const valueParsing = Number.parseFloat(value);
    if (Number.isNaN(valueParsing)){
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