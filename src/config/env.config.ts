interface ConfigEnvironment {
  port: number;
  db_url: string;
}

const config = (): ConfigEnvironment => ({
  port: parseInt(process.env.PORT) || 3030,
  db_url: process.env.PORT!
});

export const EnvValue = {
  port: 'port',
  db_url: 'db_url'
}

export default config;
