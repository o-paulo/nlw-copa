function createGame(player1, player2, hour) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira ${player2}">
    </li>
  `
}

let delay = -0.4;
function createCard(date, day, games) {
  delay = delay + 0.3;
  return `
    <div class="card" style="animation-delay: ${delay}s">
      <h2>${date} <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#cards").innerHTML = `
    ${createCard("28/10", "terca", createGame('brazil','serbia', '16:00'))}
    ${createCard("30/10", "sexta", createGame('colombia', 'japan', '14:00'))}
`
