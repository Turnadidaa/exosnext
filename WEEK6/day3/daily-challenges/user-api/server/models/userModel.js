const pool = require('../config/db');

// Enregistre un nouvel utilisateur dans les 2 tables
const registerUser = async (userData, hashedPassword) => {
  const { email, username, first_name, last_name } = userData;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const insertUserQuery = `
      INSERT INTO users (email, username, first_name, last_name)
      VALUES ($1, $2, $3, $4)
      RETURNING *;
    `;

    const resUser = await client.query(insertUserQuery, [
      email,
      username,
      first_name,
      last_name,
    ]);

    const insertPwdQuery = `
      INSERT INTO hashpwd (username, password)
      VALUES ($1, $2);
    `;

    await client.query(insertPwdQuery, [username, hashedPassword]);

    await client.query('COMMIT');
    return resUser.rows[0];
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
};

module.exports = {
  registerUser,
};
