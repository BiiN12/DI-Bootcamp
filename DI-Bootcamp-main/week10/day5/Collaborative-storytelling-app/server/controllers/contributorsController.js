import pool from "../db.js";

export const getContributor = async (req, res) => {
  try {
    const story_id = req.params.story_id;

    const result = await pool.query(
      "SELECT * FROM Contributors WHERE story_id = $1",
      [story_id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Story not found" });
    }

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addContributor = async (req, res) => {
  try {
    const { story_id, user_id } = req.body;

    const result = await pool.query(
      "INSERT INTO Contributors(story_id, user_id) VALUES ($1, $2) RETURNING *",
      [story_id, user_id]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteContributor = async (req, res) => {
  try {
    const id = req.params.id;

    const story = await pool.query("SELECT * FROM Contributors WHERE id = $1", [
      id,
    ]);
    if (story.rows.length === 0) {
      return res.status(404).json({ message: "Story not found" });
    }

    const { story_id, user_id } = story.rows[0];

    const author = await pool.query(
      "SELECT * FROM Stories WHERE id = $1 AND author_id = $2",
      [story_id, req.userId]
    );
    if (author.rows.length === 0) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const result = await pool.query(
      "DELETE FROM Contributors WHERE story_id = $1 AND user_id = $2 RETURNING *",
      [story_id, user_id]
    );

    res.json({ message: "Contributor deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
