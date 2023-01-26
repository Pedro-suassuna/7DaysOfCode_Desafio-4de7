var computerNumber = Math.floor(Math.random() * (10 - 0 + 1) + 0)
var userNumber = prompt(`Digite um número de 1 a 10:`)

for (var counter = 1; counter <= 3; counter++) {
  if (userNumber == computerNumber) {
    alert("Meus parabéns, você conseguiu acertar o número! 🤩🏆")
    break
  } else {
    if (counter == 3) {
      alert("Que pena 😥 Suas chances acabaram... 🚫")
      break
    }
    alert(`Você tem ${3 - counter} chances restantes... 😖`)
    var userNumber = prompt(`Digite outro número de 1 a 10:`)
  }
}
