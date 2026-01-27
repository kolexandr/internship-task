import { pool } from "./db.js";

await pool.query(`
CREATE TABLE IF NOT EXISTS games (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  platform TEXT NOT NULL,
  region TEXT NOT NULL,
  price NUMERIC NOT NULL,
  old_price NUMERIC,
  cashback NUMERIC,
  likes INTEGER,
  image_url TEXT
);
`);

await pool.query("DELETE FROM games");

await pool.query(`
INSERT INTO games (title, platform, region, price, old_price, cashback, likes, image_url)
VALUES
('Split Fiction', 'Xbox Series X|S', 'EU', 35.15, 49.99, 3.87, 1039, 'https://upload.wikimedia.org/wikipedia/en/4/40/Split_Fiction_cover_art.jpg'),
('Split Fiction', 'PC (EA App)', 'Global', 40.93, 49.99, 4.50, 626, 'https://upload.wikimedia.org/wikipedia/en/4/40/Split_Fiction_cover_art.jpg'),
('Red Dead Redemption 2', 'PC (Steam)', 'Global', 19.99, 59.99, 2.00, 5200, 'https://upload.wikimedia.org/wikipedia/en/4/44/Red_Dead_Redemption_II.jpg'),
('FIFA 23', 'PlayStation 5', 'EU', 24.99, 69.99, 2.50, 4100, 'https://upload.wikimedia.org/wikipedia/en/a/a6/FIFA_23_Cover.jpg');
`);

console.log("Database seeded");
process.exit();
