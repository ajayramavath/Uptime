import express from "express";
import cors from "cors";

import { client } from "@uptime/db"

const app = express();
app.use(cors());

function initDb() {
  client.$connect().then(() => {
    console.log("Connected to db")
  })
}

initDb()

app.get("/", (req, res) => {
  res.send("Hello World!");
})

app.get("/users", async (req, res) => {
  const users = await client.user.findMany()
  res.status(200).json({ data: users })
})

app.listen(8080);