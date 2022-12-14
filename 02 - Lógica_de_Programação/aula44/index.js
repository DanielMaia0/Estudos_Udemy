
/*
try {
    console.log(naoExisto);
} catch(e) {
    console.log('ERROR: var not found')
    console.log(e)
}
*/
function soma(x, y) {
    if (
    typeof x !== 'number' ||
    typeof y !== 'number'
    ) {
        throw new Error('x e y precisam ser números!');
    } 
    
    return x + y;
}

try {
    console.log(soma(1, 2));
    console.log(soma('1', 2));

} catch (e) {
    //console.log(e);
    console.log('Deu erro ai parça.')
}