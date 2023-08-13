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

  // static get = async () => {
  //   const db = await dbPromise;
  //   const result = db.query('SELECT * FROM tasks');
  //   console.log(result);
  // }
}
