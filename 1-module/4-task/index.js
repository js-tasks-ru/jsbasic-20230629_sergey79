function checkSpam(str) {
  let firstLine = "1xBet"
  let secondLine = "XXX"
  return str.toLowerCase().includes(firstLine.toLowerCase()) || str.toLowerCase().includes(secondLine.toLowerCase())
}