interface Env {
  port: number;
  nodeEnv: string;
  dbFileName: string;
}

const env: Env = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
  dbFileName: process.env.DB_FILE_NAME || 'file:api.local.db',
};

export default env;
