
document.addEventListener('DOMContentLoaded', function () {
  const playerList = document.querySelector('#playerList');

  if (!playerList) {
    console.error('Player list element not found.');
    return;
  }

  let playerListData = JSON.parse(localStorage.getItem('playerListData')) || [];

  const updatePlayerList = () => {
    playerList.innerHTML = '';

    playerListData.forEach(player => {
      const listItem = document.createElement('li');
      listItem.textContent = player.name;
      playerList.appendChild(listItem);
    });
  };

  updatePlayerList();
});
