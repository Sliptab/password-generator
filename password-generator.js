let characters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+"]

let max = 75
let passEl = document.getElementById('pass-el')

function generateRandomNum() {
  let randomNum = Math.floor( Math.random() * max)
  return randomNum
}

function generatePass() {
  passEl.textContent = ""
  
  for (let i = 0; i < 13; i++) {
    passEl.textContent += characters[generateRandomNum()]
  }
}