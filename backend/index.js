import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());

app.get("/list", async (req, res) => {
  const search = req.query.search;

  let query = "SELECT * FROM games";
  let params = [];

  if (search) {
    query += " WHERE title ILIKE $1";
    params.push(`%${search}%`);
  }

  const result = await pool.query(query, params);
  res.json(result.rows);
});

app.listen(3001, () => {
  console.log("Backend running on http://localhost:3001");
});
