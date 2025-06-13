import express from "express";
import cors from "cors";
import { client } from "@uptime/db"

const app = express();
app.use(cors());
app.use(express.json());


app.listen(8080); 