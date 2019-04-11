import express from 'express';
import http from 'http';
import constants from 'Config/constants';
import middleware from 'Config/middleware';
import apiRoutes from 'Modules';
import cluster from 'cluster';

import { setupWorkerProcesses } from 'Config/cluster';

const setUpExpress = () => {
  const app = express();
  const server = http.createServer(app);

  app.use('/ping', (req, res) => res.status(200).send('pong'));

  middleware(app);
  apiRoutes(app);

  server.listen(constants.PORT, () => {
    console.log(`Server is running on ${constants.PORT} port`);
  });
};

const setupServer = isClusterRequired => {
  if (isClusterRequired && cluster.isMaster) {
    setupWorkerProcesses();
  } else {
    setUpExpress();
  }
};

setupServer(true);
