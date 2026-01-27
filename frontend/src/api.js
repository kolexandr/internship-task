const API_URL = "http://localhost:3001";

export async function fetchGames(search = "") {
  const res = await fetch(
    `${API_URL}/list${search ? `?search=${search}` : ""}`
  );
  return res.json();
}
