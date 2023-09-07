import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config()

/**
 * Variabes
 */

if (!process.env.PORT) {
  console.error("PORT is not set.");
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 * Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server
 */

app.listen(PORT, () => {
  console.info(`Listening on port ${PORT}`);
})