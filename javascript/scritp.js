function initialDb() {
  let initDb = {
    users: [],
  };

  let currentDb = JSON.parse(localStorage.getItem("database")) || initDb;
  localStorage.setItem("database", JSON.stringify(currentDb));
}

function registerUser() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let database = JSON.parse(localStorage.getItem("database")) || {users: []};

  let existingUser = database.users.find(function (user) {
    return user.email === email;

  });
  
  if (!existingUser) {
    let newUser = {
      name: name,
      email: email,
      password: password,
    };

    database.users.push(newUser);
    localStorage.setItem("database", JSON.stringify(database));

    alert("Cadastro realizado");
    console.log(database);

    document.getElementById("signup").reset();
    
  } else {
    alert("esse email está sendo usado por outro usúario");
  }
}

function loginUser() {
  let email = document.getElementById("loginEmail").value;
  let password = document.getElementById("loginPassword").value;

  let database = JSON.parse(localStorage.getItem("database")) || {users: []};

  let authenticatedUser = database.users.find(function (user) {
    return user.email === email && user.password === password;
  });

  if (authenticatedUser) {
    redirectPage();
    alert("login realizado");
    console.log(authenticatedUser);

  } else{
    alert("email ou senha incorretos, por favor tente novamente a claro agradece seu contato" );
  }
}


function redirectPage() {
  var url = 'principal.html';
  window.location.href = url;
}

initialDb();