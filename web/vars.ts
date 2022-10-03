import { Connection, PublicKey } from "@solana/web3.js";
import dotenv from "dotenv";

const dotEnvVars = dotenv.config().parsed;

export const productionEnvironment = (dotEnvVars as any).PRODUCTION;

// API
export const ywhalesApiEndpoints = {
    mainnet: 'https://api.ywhales.com',
    devnet: 'https://api-ywhales.fluidchains.xyz',
}
export const connection = new Connection(productionEnvironment ? 'https://solana-mainnet.phantom.tech/' : 'https://devnet.genesysgo.net/');

// AH
export const AUCTION_HOUSE_PROGRAM_ID = new PublicKey(
    'hausS13jsjafwWwGqZTUQRmWyvyxn9EQpqMwV1PBBmk',
);
export const AUCTION_HOUSE_ID = new PublicKey(
    'H4mzddoqB72rPExPq2LKGux8UqiAXWECardgZZCM3bMz',
);
  
// DB
export const dbConfig = {
    user: (dotEnvVars as any).POSTGRES_USER,
    host: (dotEnvVars as any).DATABASE_HOST,
    password: (dotEnvVars as any).POSTGRES_PASSWORD,
    database: (dotEnvVars as any).POSTGRES_DB
};