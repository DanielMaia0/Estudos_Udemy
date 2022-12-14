/*
function recursiva(max) {
    console.log(max);
    if (max >= 11292) return; // Até o dia que vi a aula o prograva trava em 11293!
    max++;
    recursiva(max);
}

recursiva(0); */

recur = (max) => {
    console.log(max);
    if (max >= 10) return; max++; recur(max);
}
recur(0);