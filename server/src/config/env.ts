interface Env {
  port: number;
  nodeEnv: string;
}

const env: Env = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || 'development',
};

export default env;
