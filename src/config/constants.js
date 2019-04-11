const defaultConfig = {
  PORT: process.env.PORT || 3000,
  JWT_SECRET: 'knowledgepoint1024!@',
};

const devConfig = {
  PG: {
    user: 'genie',
    host: '106.240.247.42',
    database: 'wgcpdb',
    password: 'genie01',
    port: 5432,
  },
};

const prodConfig = {
  PG: {
    user: 'genie',
    host: '106.240.247.42',
    database: 'wgcpdb',
    password: 'genie01',
    port: 5432,
  },
};

function envHandler(env) {
  switch (env) {
    case 'development':
      return devConfig;
    case 'prod':
      return prodConfig;
    default:
      return devConfig;
  }
}

export default {
  ...defaultConfig,
  ...envHandler(process.env.NODE_ENV),
};
