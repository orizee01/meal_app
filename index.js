import express from 'express';
import logger from './config/env/logger';

const port = process.env.PORT || 8080;
const app = express();

global.logger = logger;
app.listen(port);
logger.info(`Application started on port ${port}`);

export default app;
