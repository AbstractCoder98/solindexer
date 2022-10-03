import { Router } from 'express';
import { getAHRecords, postAHRecord } from '../controllers/db.controller';

const router = Router();

// // ----------- GET ----------- //
router.get('/ah_records', getAHRecords);
router.post('/ah_records', postAHRecord);
// router.get('/packages_list', getPackageTokens);
// router.get('/listings_metadata', getListingsMetadata);
// router.post('/update_listings', updateListingsMetadataFile);
// router.get('/listings_sales', getListingsSales);
// router.get('/ah_grouped_info', getGroupedAHInfo);
// router.post('/post_sale', postIncomingSale);
// // ---------- POST ---------- //
// router.get('/wallet_package_tokens', getWalletPackageTokens);
// router.post('/mint_editions', mintPackageTokenEditions);
// // ----------- Orphan Tokens ----------- //
// router.get('/orphans', getOrphanTokens);
// // ------------ Crossmint ------------- //
// router.get('/crossmint_sells_fetch', getCrossmintSales);
// router.post('/crossmint', postCrossmintSale);
// router.post('/crossmint_fetch', getCrossmintSale);
// // ----------- Distribution Status ----- //
// router.get('/dist_status', getDistributionStatus);

export default router;