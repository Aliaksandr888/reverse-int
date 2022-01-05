module.exports = function reverse (n) {
    if(n<0){
        n=n-n*2
        n=n.toString().split('').reverse();
   n=Number(n.join(''));
   return n
  }else{
        n=n.toString().split('').reverse();
   n=Number(n.join(''));
   return n
  }
}

