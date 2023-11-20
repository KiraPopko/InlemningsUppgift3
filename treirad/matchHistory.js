document.addEventListener('DOMContentLoaded', function () {
  const matchHistoryBody = document.getElementById('matchHistoryBody');

  // Retrieve match history data from local storage
  const matchHistoryData = JSON.parse(localStorage.getItem('matchHistoryData')) || [];

  // Update match history table on the match history page
  matchHistoryData.forEach((match) => {
    const newRow = document.createElement('tr');
    const winnerCell = document.createElement('td');
    const opponentCell = document.createElement('td');
    const roundCountCell = document.createElement('td');
    const resultCell = document.createElement('td');

    winnerCell.textContent = match.winner;
    opponentCell.textContent = match.opponent;
    roundCountCell.textContent = match.roundCount;
    resultCell.textContent = match.result;

    newRow.appendChild(winnerCell);
    newRow.appendChild(opponentCell);
    newRow.appendChild(roundCountCell);
    newRow.appendChild(resultCell);

    matchHistoryBody.appendChild(newRow);
  });
});

//matchhistory = matchistory.reverse.splice(0, 10)

