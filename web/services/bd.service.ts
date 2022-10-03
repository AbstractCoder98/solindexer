import axios from "axios";
import { poblateListingsMetadataTable, poblateListingsSalesTable, poblateWalletPackageTokensTable } from "../utils/db.utils";
import { productionEnvironment, ywhalesApiEndpoints } from "../vars";

// Migrate data from JSON api to postgres database
export async function migrate() {
    // const apiData = await axios.get(productionEnvironment ? `${ywhalesApiEndpoints.mainnet}/ah_grouped_info` : `${ywhalesApiEndpoints.devnet}/ah_grouped_info`);
    // console.log('apiData: ', apiData)
    const walletPackageTokens = await axios.get(productionEnvironment ? `${ywhalesApiEndpoints.mainnet}/wallet_package_tokens` : `${ywhalesApiEndpoints.devnet}/wallet_package_tokens`);
    await poblateWalletPackageTokensTable(walletPackageTokens);
    const listingsMetadata = await axios.get(productionEnvironment ? `${ywhalesApiEndpoints.mainnet}/listings_metadata` : `${ywhalesApiEndpoints.devnet}/listings_metadata`);
    await poblateListingsMetadataTable(listingsMetadata);
    const listingsSales = await axios.get(productionEnvironment ? `${ywhalesApiEndpoints.mainnet}/listings_sales` : `${ywhalesApiEndpoints.devnet}/listings_sales`);
    await poblateListingsSalesTable(listingsSales);
}