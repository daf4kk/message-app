function idGenetator(){
    const pattern = 'qwertyyuiop123456789';
    const arrOfPattern = pattern.split('');
    let newId = [];
    while (newId.length !== 8){
        const patternId = Math.floor(Math.random() * 21);
        const symOfPattern = arrOfPattern[patternId];
        newId.push(symOfPattern);
    }
    const finalId = newId.join('');
    return finalId;
}
idGenetator();





export default idGenetator;