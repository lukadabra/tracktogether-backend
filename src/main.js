import express from "express/index.js";
const app = express();
const port = 5000;

import cors from "cors";
import supertokens from "./utils/superToken.js";
import { middleware, errorHandler } from "supertokens-node/framework/express/index.js";

app.use(cors({
    origin: "http://localhost:5173",
    allowedHeaders: ["content-type", ...supertokens.getAllCORSHeaders()],
    credentials: true,
}));

// IMPORTANT: CORS should be before the below line.
app.use(middleware());

// API routes
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Add this AFTER all your routes
app.use(errorHandler())

// your own error handler
app.use((err, req, res, next) => { /* ... */ });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});