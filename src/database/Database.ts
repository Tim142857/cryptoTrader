// src/database/Database.ts
import * as mysql from 'mysql2/promise';

export class Database {
    private db!: mysql.Connection;

  constructor(config: mysql.ConnectionOptions) {
    mysql.createConnection(config).then(connection => {
      this.db = connection;
    });
  }

  async query(queryString: string, values?: any[]): Promise<any> {
    try {
      const [rows] = await this.db.execute(queryString, values);
      return rows;
    } catch (error) {
      console.error('Database query error:', error);
      throw error;
    }
  }

  // ... autres méthodes pour interagir avec la base de données
}
