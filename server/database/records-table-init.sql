CREATE TABLE IF NOT EXISTS records(
    id SERIAL PRIMARY KEY,
    masterEditionId VARCHAR(255),
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
)