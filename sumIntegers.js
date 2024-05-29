function sumOfIntegersInString(s) {
  const spl = s.split(/\D+/);
  const sumInt= spl.map(Number).reduce((acc,num) => acc + num,0)
  
  return sumInt;
}
