import cluster from 'cluster';
import os from 'os';

export const setupWorkerProcesses = () => {
  const numCores = os.cpus().length;

  for (let i = 0; i < numCores; i++) {
    cluster.fork();
  }

  cluster.on('online', worker => {
    console.log(`Worker ${worker.process.pid} is listening`);
  });

  cluster.on('exit', (worker, code, signal) => {
    console.log(
      `Woker ${
        worker.process.pid
      } died with code: ${code} and signal: ${signal}`
    );

    console.log('Starting a new worker');
    cluster.fork();
  });
};
