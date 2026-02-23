
import express from "express"
import jwt from "jsonwebtoken"
const SECRET = "lpu"
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiam9obiIsImVtYWlsIjoiam9obkBnbWFpbC5jb20iLCJyb2xlIjoic3R1ZGVudCIsImlhdCI6MTc3MTgzNDA3MSwiZXhwIjoxNzcxODM3NjcxfQ.HUlDqrSvI1P0CY2TQrfmnVk_SpF83ZxrwOByofcBDg8"
const user = jwt.verify(token,SECRET)//extracting token
console.log(user)