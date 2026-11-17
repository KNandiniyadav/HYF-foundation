const users = [
  { id: 1, name: "Thomas", email: "thomas123@gmail.com" },
  { id: 2, name: "Henrik", email: "henrik@gmail.com" },
  { id: 3, name: "Oli", email: "oli456@gmail.com" },
];

const express = require("express");
const app = express();

app.get("/users", (req, res) => {
  res.send(users);
});

app.use(express.json());

app.post("/users", (req, res) => {
  console.log(req.body);
  let highestId = 0;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id > highestId) {
      highestId = users[i].id;
    }
  }
  let newuserId = highestId + 1;
  let newUser = { id: newuserId, name: req.body.name, email: req.body.email };
  users.push(newUser);
  res.json({
    message: "new user added successfully!!",
    user: req.body,
  });
});

app.delete("/users/:id", (req, res) => {
  let userId = Number(req.params.id);
  let userFound = false;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === userId) {
      users.splice(i, 1);
      userFound = true;
      break;
    }
  }
  if (userFound) {
    res.send("user deleted successfully");
  } else {
    res.send("user not found");
  }
});
app.get("/user-count", (req, res) => {
  res.json({ count: users.length });
});

app.get("/", (req, res) => {
  res.send(`
    <html>
    <head>
    <style> 
    body{
    background-color: beige;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    min-height: 100vh;
    margin: 0;   
    }
    </style>
    </head>
    <body>
    <h1>WELCOME TO USERS WEBPAGE</h1>
    <h2>Active users</h2>
    <p id="user-count">Loading user count</p>
    <script> 
    fetch("/user-count") 
    .then(response =>{
        return response.json();})
    .then(data => {
    document.getElementById("user-count").textContent = data.count; })
    </script>
    </body></html>`);
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
