import { AUCTION_HOUSE_ID, AUCTION_HOUSE_PROGRAM_ID, connection } from "../vars";

export function lookupAHProgramChanges () {
    connection.onProgramAccountChange(AUCTION_HOUSE_ID, (change) => {
        console.log('ProgramAccountChange: ', change);
    })
    connection.onAccountChange(AUCTION_HOUSE_ID, (change) => {
        console.log('AccountChange: ', change);
    })
}