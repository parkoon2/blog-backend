import cors from 'cors';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';

export default app => {
  const isDev = process.env.NODE_ENV === 'development';
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    app.use(compression());
    app.use(helmet());
  }

  if (isDev) {
    app.use(morgan('dev'));
  }

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());
};
