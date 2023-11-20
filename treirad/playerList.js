/*document.addEventListener('DOMContentLoaded', function () {
  // Retrieve player list data from local storage
  let playerListData = JSON.parse(localStorage.getItem('playerListData')) || [];

  // Get the playerList element
  const playerList = document.getElementById('playerList');

  // Display the player list
  playerListData.forEach(player => {
    const listItem = document.createElement('li');
    listItem.textContent = player.name; // Assuming each player object has a 'name' property
    playerList.appendChild(listItem);
  });
});*/

/*document.addEventListener('DOMContentLoaded', function () {
  const playerList = document.querySelector('#playerListData');

  if (!playerList) {
    console.error('Player list element not found.');
    return;
  }

  // Retrieve player list data from local storage
  let playerListData = JSON.parse(localStorage.getItem('playerListData')) || [];

  const updatePlayerList = () => {
    // Clear the existing player list on the page
    playerList.innerHTML = '';

    // Display the updated player list
    playerListData.forEach(player => {
      const listItem = document.createElement('li');
      listItem.textContent = player.name; // Assuming each player object has a 'name' property
      playerList.appendChild(listItem);
    });
  };

  // Initial update
  updatePlayerList();
});*/

document.addEventListener('DOMContentLoaded', function () {
  const playerList = document.querySelector('#playerList');

  if (!playerList) {
    console.error('Player list element not found.');
    return;
  }

  // Retrieve player list data from local storage
  let playerListData = JSON.parse(localStorage.getItem('playerListData')) || [];

  const updatePlayerList = () => {
    // Clear the existing player list on the page
    playerList.innerHTML = '';

    // Display the updated player list
    playerListData.forEach(player => {
      const listItem = document.createElement('li');
      listItem.textContent = player.name; // Assuming each player object has a 'name' property
      playerList.appendChild(listItem);
    });
  };

  // Initial update
  updatePlayerList();
});
