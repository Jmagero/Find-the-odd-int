function findOdd(A) {
  const map = {};
  for (let i of A){
   if(map[i]){
     map[i]++;
   }
   else{
     map[i] = 1;
   }
    
  }
  for( let k of Object.keys(map)) {
    if(map[k] % 2 !== 0){
      return parseInt(k);
    }
  }
}
