import { migrate } from "../services/bd.service";
import { lookupAHProgramChanges } from "../services/main.service";
import { getTokens } from "../utils/db.utils"

export const initIndexer = async () => {
    try {
        console.log('API RUNNING')
        // Check registers table content

        // If they're empty, then migrate from JSON API
        await migrate();
        // If not empty, double check DB registers in oder to sync with chain
        // Lookup for AH program changes
        lookupAHProgramChanges()
    } catch (error) {
        console.error(error);
    }
}