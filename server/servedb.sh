#!/bin/bash
docker start
docker-compose up -d
cat database/records-table-init.sql | docker exec -i postgres psql -U postgres -d solindexer -p 3900