function solution(A) {

    let max = Math.max(...A);
    if(max < 1){
        return 1;
    }

    let Aset = new Set(A);
    let B = [...Array(max+1).keys()];
    B.shift();
    let Bset = new Set(B);
    const diff = new Set([...Bset].filter(x => !Aset.has(x)));
    // console.log("Bset... ", Bset, Aset, diff)
    if(diff.size === 0){
        return max + 1
    }else{
        return Array.from(diff).sort()[0];
    }
}

A = [98,100]
console.log(solution(A));