function tournamentWinner(competitions, results) {
    // Write your code here.
    let store = {};
      
    for(let i = 0; i < competitions.length; i++){
        if (results[i] == 0){
            if(store[competitions[i][1]]){
                store[competitions[i][1]] +=3
            }else{
                store[competitions[i][1]] = 3
            }
        }else{
            if(store[competitions[i][0]]){
                store[competitions[i][0]] +=3
            }else{
                store[competitions[i][0]] = 3
            }
        }
    }

    let max = 0;
    let nameOfMax;
    for(el in store){
        if(store[el] > max) {
            max = store[el];
            nameOfMax = el;
        }
    }

    return nameOfMax;
    
}
          