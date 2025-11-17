import pool from "../db.js";

export const getStories = async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT * FROM Stories WHERE author_id = $1",
      [req.userId]
    );

    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const createStories = async (req, res) => {
  try {
    const { title, content } = req.body;
    const result = await pool.query(
      "INSERT INTO Stories (title, content, author_id) VALUES ($1, $2, $3) RETURNING *",
      [title, content, req.userId]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const updateStories = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, content } = req.body;

    if (!title && !content) {
      return res
        .status(400)
        .json({ message: "At least title or content is required" });
    }

    let query = "UPDATE Stories SET ";
    const params = [];
    let paramCount = 1;

    if (title) {
      query += `title = $${paramCount}`;
      params.push(title);
      paramCount++;
    }

    if (content) {
      if (title) query += ", ";
      query += `content = $${paramCount}`;
      params.push(content);
      paramCount++;
    }

    query += `, updated_at = CURRENT_TIMESTAMP WHERE id = $${paramCount} AND author_id = $${
      paramCount + 1
    } RETURNING *`;
    params.push(id, req.userId);

    const result = await pool.query(query, params);

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Story not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const deleteStories = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await pool.query(
      "DELETE FROM Stories WHERE id = $1 AND author_id = $2 RETURNING *",
      [id, req.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "Story not found" });
    }

    res.json({ message: "Story deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
