import connection from '../config/db';

export class Todo {
  static create = (text: string) => {
    return connection()
      .then(async (connection) => {
        const [result]: any = await connection.query('INSERT INTO tasks (text) VALUES (?)', [text]);
        connection.end();
        return {id: result.insertId, text: text};
      })
      .catch(error => {
        console.error('Error:', error.message);
        return undefined;
      });
  }

  static get = async () => {
    return connection()
      .then(async (connection) => {
        const results = await connection.query('SELECT * FROM tasks');
        connection.end();
        return results[0];
      })
      .catch(error => {
        console.error('Error:', error.message);
        return undefined;
      })
  }

  static update = async (id: string, text: string) => {
    return connection()
      .then(async (connection) => {
        const getIndex = await connection.query('SELECT id FROM tasks WHERE id = ?', [id]);
        if (getIndex === undefined) {
          console.log('更新対象がありません');
          return undefined;
        }
        const [result]: any = await connection.query('UPDATE tasks SET text = ? WHERE id = ?', [text, id]);
        connection.end();
        return {id: result.insertId, text: text};
      })
  }
}
