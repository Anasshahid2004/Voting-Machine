let myArray = [];

let friendNameInput = document.getElementById("friendNameInput");
let addFriendButton = document.getElementById("addFriendButton");
let friendList = document.getElementById("friendList");

addFriendButton.addEventListener("click", () => {
  const newFriendName = friendNameInput.value;
  if (newFriendName) {
    myArray.push(newFriendName);
    friendNameInput.value = "";
    buildPage();
  }
});

function buildPage() {
  friendList.innerHTML = "";
  myArray.forEach((name, index) => {
    createTableRow(index + 1, name);
  });
}

function createTableRow(index, name) {
  let row = document.createElement("tr");
  let indexCell = document.createElement("td");
  let nameCell = document.createElement("td");  
  let votesCell = document.createElement("td");
  let voteCounter = document.createElement("span");

  indexCell.textContent = index;
  nameCell.textContent = name;
  voteCounter.textContent = 0;
  votesCell.appendChild(voteCounter);

  votesCell.addEventListener("click", () => {
    let currentVotes = parseInt(voteCounter.textContent);
    currentVotes++;
    voteCounter.textContent = currentVotes;
  });

  row.appendChild(indexCell);
  row.appendChild(nameCell);
  row.appendChild(votesCell);
  friendList.appendChild(row);
}

buildPage();