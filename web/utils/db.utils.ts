import axios from 'axios';
import { Pool } from "pg";
import dotenv from "dotenv";
import { dbConfig, productionEnvironment, ywhalesApiEndpoints } from '../vars';

// DB CONNECTION
const dotEnvVars = dotenv.config().parsed;
// const dbPool = new Pool(dbConfig);

export async function checkRecordsTable(pool: Pool): Promise<boolean> {
    try {
        const response = await pool.query(`SELECT EXISTS(
            SELECT * 
            FROM information_schema.tables 
            WHERE 
              table_schema = 'public' AND 
              table_name = 'records'
        );`);
        return response;
    } catch (error) {
        return false;
    }
}

export async function initializeRecordsTable(pool: Pool): Promise<void> {
    try {
        const response = await pool.query(`CREATE TABLE records(
            masterEditionId VARCHAR(255) PRIMARY KEY,
            masterEditionParent VARCHAR(255),
            metadata TEXT,
            maxSupply SMALLINT,
            supply SMALLINT,
            listedEditions SMALLINT,
            isCommon BOOLEAN,
            saleable BOOLEAN,
            price BIGINT,
            editions TEXT,
            unsoldQty SMALLINT,
            reservedEditions SMALLINT
        )`);
        console.log('Records table initialized successfully');
    } catch (error) {
        console.log(error)
    }
}

export async function getTokens() {
    console.log('dbConfig: ', dbConfig)
    const dbPool = new Pool(dbConfig);
    console.log('dbPool: ', dbPool)
    const res = await dbPool.query('select *');
}

export async function poblateWalletPackageTokensTable(walletPackageTokens) {
    // console.log('poblateWalletPackageTokensTable!')
    // console.log('walletPackageTokens: ', walletPackageTokens)
}

export async function poblateListingsMetadataTable(listingsMetadata) {

}

export async function poblateListingsSalesTable(listingsSales) {

}