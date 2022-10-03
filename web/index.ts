import dotenv from "dotenv";
import { initIndexer } from "./controllers/main.controller";
// import { initAPI } from "./controllers/main.controller";
// import indexRoutes from './routes/index';
import dbRoutes from './routes/db.routes';

const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const dotEnvVars = dotenv.config().parsed;

// Middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use(dbRoutes);

// Server initialization
app.listen(Number((dotEnvVars as any).PORT), initIndexer())
