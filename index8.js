


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

// import express from "express";

// const app = express();

// //just for example

// // const greet = (req,res,next) => {
// //   console.log("Hello World");
// // next}
// // app.use(greet);
// // middleware to read JSON body
// app.use(express.json()); //express.json() is called middleware and app.use executes the middleware




// const users = [
//   { id: 1, name: "John", email: "john@gmail.com", role: "student" },
//   { id: 2, name: "Cathy", email: "cathy@gmail.com", role: "student" },
//   { id: 3, name: "Admin", email: "admin@gmail.com", role: "admin" }
// ];

// // GET user by id
// app.get("/:id", (req, res) => {
//   const found = users.find(u => u.id === parseInt(req.params.id));
//   res.json(found);
// });

// // POST add new user
// app.post("/", (req, res) => {
//   const user = req.body.name;
//   users.push(user);
//   res.json(user);
// });

// // DELETE user by id
// app.delete("/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const filteredUsers = users.filter(u => u.id !== id);
//   res.json(filteredUsers);
// });

// app.listen(8080, () => {
//   console.log("Server running on port http://localhost:8080 ");
// });











import express, { request, response } from "express";
const app = express();
app.listen(8080, () => {
  console.log("Server Started....");
});

// const greet = (req,res,next) => {
//   console.log("Hello World");
//   next()
  
// };
// app.use(greet)

app.use(express.json());

let users = [
  { id: 1, name: "avi", email: "avi@mail.com", role: "Student" },
  { id: 2, name: "satyam", email: "satyam@mail.com", role: "admin" },
  { id: 3, name: "vivaan", email: "vivaan@mail.com", role: "Student" },
];

app.get("/", (request, response) => {
  response.json(users);
});

app.post("/", (request, response) => {
  //   console.log(request.body);
  const user = request.body.name;
  users.push(user);
  response.json(users);
});

app.delete("/:id", (request, response) => {
  const user = users.filter((user) => user.id !== Number(request.params.id));
  response.json(users)
});

app.get("/:id", (request, response) => {
  const user = users.find((user) => user.id === Number(request.params.id));
  if (user) {
    response.json(user);
  }
});