import { pool } from "../db.js";

export const getTasks = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM TASKS  order by id desc");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getTask = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM TASKS  where id = (?)", [
      req.params.id,
    ]);
    if (!result.length) {
      return res.status(404).json({ message: "Tarea no encontrada" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createTasks = async (req, res) => {
  try {
    const { title, description } = req.body;
    const [result] = await pool.query(
      "INSERT INTO TASKS (title,description,done) values (?,?,?)",
      [title, description, 0]
    );
    res.json({
      id: result.insertId,
      title,
      description,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateTasks = async (req, res) => {
  try {
    const [result] = await pool.query("UPDATE TASKS  SET  ? where id = ?", [
      req.body,
      req.params.id,
    ]);
    if (!result.affectedRows) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Tarea Actualizada" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteTasks = async (req, res) => {
  try {
    const [result] = await pool.query("DELETE FROM TASKS  where id = (?)", [
      req.params.id,
    ]);

    if (!result.affectedRows) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Tarea Eliminada" });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
