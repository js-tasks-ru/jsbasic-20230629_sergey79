function factorial(n) {
  if(n==0){return n=1}
  else {for(let a = n-1; a > 1; a--){
    n *= a
  }
  return n
}
}
