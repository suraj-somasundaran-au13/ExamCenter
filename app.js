let users = [];

function notifyUserAdded() {
  let alert = document.getElementById("alert-success");
  alert.classList.remove("alert");
  alert.classList.add("alert-success");

  setTimeout(() => {
    alert.classList.remove("alert-success");
    alert.classList.add("alert");
  }, 2000);
}

function notifyUserExist() {
  let alert = document.getElementById("alert-danger");
  alert.classList.remove("alert");
  alert.classList.add("alert-danger");

  setTimeout(() => {
    alert.classList.remove("alert-danger");
    alert.classList.add("alert");
  }, 2000);

  // 2000 is milliseconds
}

function addUser(userInput) {



  let checkUser = users.filter((user) => {
    return user.email == userInput.email; 
  });

  if (checkUser.length == 0) {
    users.push(userInput);
    notifyUserAdded();
  } else {
    notifyUserExist();
  }
}

function displayUsers() {
  let usersContainer = document.getElementById("users");
  usersContainer.innerHTML = " ";
  users.map((a) => {
    let userDiv = document.createElement("div");
    userDiv.classList.add("user");
    let nameElement = document.createElement("p");
    nameElement.innerText = a.name;
    let emailElement = document.createElement("p");
    emailElement.innerText = a.email;
    let cityElement = document.createElement("p");
    cityElement.innerText = a.city;

    usersContainer.appendChild(userDiv);
    userDiv.appendChild(nameElement);
    userDiv.appendChild(emailElement);
    userDiv.appendChild(cityElement);
  });
}

function add() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let city = document.getElementById("city");

  let arr = [
    "Nagpur",
    "Bangalore",
    "Chennai",
    "Mumbai",
    "Kolkata",
    "Pune",
    "Kochi",
  ];

  let value = arr[Math.floor(Math.random() * arr.length)];
  console.log(value);

  let user = {
    name: name.value,
    email: email.value,
    city: value,
  };

  addUser(user);
  displayUsers();

  console.log(users);
}
