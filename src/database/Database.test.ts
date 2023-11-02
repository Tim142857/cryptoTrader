// src/database/Database.test.ts
import { Database } from './Database';
import * as mysql from 'mysql2/promise';

jest.mock('mysql2/promise');

describe('Database', () => {
    let database: Database;

    beforeEach(() => {
        (mysql.createConnection as jest.Mock).mockClear();
        database = new Database({
            host: 'localhost',
            user: 'user',
            password: 'password',
            database: 'database',
        });
    });

    it('should create a new database connection', async () => {
        expect(mysql.createConnection).toHaveBeenCalledWith({
            host: 'localhost',
            user: 'user',
            password: 'password',
            database: 'database',
        });
    });

    it('should execute a query', async () => {
        const mockQuery = jest.fn().mockResolvedValue([{ id: 1, name: 'Test' }]);
        (mysql.createConnection as jest.Mock).mockResolvedValue({ query: mockQuery });

        const result = await database.query('SELECT * FROM test');
        expect(result).toEqual([{ id: 1, name: 'Test' }]);
        expect(mockQuery).toHaveBeenCalledWith('SELECT * FROM test');
    });

});
