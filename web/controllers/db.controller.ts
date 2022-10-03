import { Request, Response } from 'express';
import { checkRecordsTable, initializeRecordsTable } from '../utils/db.utils';
const { Pool } = require('pg');

const pool = new Pool({
    host: 'db',
    user: 'postgres',
    password: 'qwerty',
    database: 'solindexer',
    port: '5432'
})

export const getAHRecords = async (req: Request, res: Response): Promise<Response> => {
    try {
        const response = await pool.query('SELECT * FROM records');
        console.log(response)
        return res.status(200).json(response.rows);
    } catch (error) {
        console.log(error)
        return res.status(500).json(error);
    }
}

export const postAHRecord = async (req: Request, res: Response): Promise<Response> => {
    try {
        console.log('pool: ', pool)
        const { masterEditionId, masterEditionParent, metadata, maxSupply, supply, listedEditions,
            isCommon, saleable, price, editions, unsoldQty, reservedEditions } = req.body;
        const tableCheck = await checkRecordsTable(pool);
        console.log('tableCheck: ', tableCheck)
        // if (!tableCheck) {
        //     console.log('Table is not yet created, creating a new one');
        //     await initializeRecordsTable(pool);
        // }
        const response = await pool.query(`INSERT INTO records (mastereditionid, mastereditionparent, metadata,
            maxsupply, supply, listededitions, iscommon, saleable, price, editions, unsoldqty, reservededitions)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $100, $11, $12)`, [masterEditionId, masterEditionParent, metadata, 
                maxSupply, supply, listedEditions, isCommon, saleable, price, editions, unsoldQty, reservedEditions]);
        console.log(response);
        return res.status(200).json('Record created');
    } catch (error) {
        return res.status(500).json(error);
    }
}