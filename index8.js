


// import express from 'express'
// const app = express()
// // app.listen(8080)
// // const user = [{
// //         id:1,
// //         name: "John",
// //         email: "john@gmail.com",
// //         role: "student",
// //     },{
// //     id:2,
// //     name: "Cathy",
// //     email: "cathy@gmail.com",
// //     role: "student",
// // },{
// //     id:3,
// //     name: "Admin",
// //     email: "admin@gmail.com",
// //     role: "admin",
// // }]
// // app.get("/", (req,res) => {
// //     res.send(user)
// // })


// app.listen(8080)
// const user = [{
//         id:1,
//         name: "John",
//         email: "john@gmail.com",
//         role: "student",
//     },{
//     id:2,
//     name: "Cathy",
//     email: "cathy@gmail.com",
//     role: "student",
// },{
//     id:3,
//     name: "Admin",
//     email: "admin@gmail.com",
//     role: "admin",
// }]
// app.get("/:id", (req,res) => {
//     const found = user.find(u=>u.id===parseInt(req.params.id))
//     res.json(found)
// })


// app.post("/",(request,response)=>{
//     const user = request.body
//     users.push(user)
//     response.json(user);

// })



// app.delete("/:id",(request,response)=>{
//     const found = user.filter(u=>u.id===parseInt(req.params.id))
//     res.json(found)
// })

import express from "express";

const app = express();

// middleware to read JSON body
app.use(express.json());

const users = [
  { id: 1, name: "John", email: "john@gmail.com", role: "student" },
  { id: 2, name: "Cathy", email: "cathy@gmail.com", role: "student" },
  { id: 3, name: "Admin", email: "admin@gmail.com", role: "admin" }
];

// GET user by id
app.get("/:id", (req, res) => {
  const found = users.find(u => u.id === parseInt(req.params.id));
  res.json(found);
});

// POST add new user
app.post("/", (req, res) => {
  const user = req.body;
  users.push(user);
  res.json(user);
});

// DELETE user by id
app.delete("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const filteredUsers = users.filter(u => u.id !== id);
  res.json(filteredUsers);
});

app.listen(8080, () => {
  console.log("Server running on port http://localhost:8080 🚀");
});
