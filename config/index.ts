// we only use this file to add typescript support to the config file
// unfortunately, we cant use typescript config inside expo config file
import { Config as NConfig } from './config.js';

type API_URL_Type = { pokemonListTypes: string; pokemonList: string };
// TODO: check how we can use typescript for this
type APP_ENV_Type = 'development' | 'staging' | 'production';
type ConfigType = {
  scheme: string;
  icon: string;
  foregroundImage: string;
  APP_ENV: APP_ENV_Type;
  API_URL: API_URL_Type;
  version: string;
  name: string;
};
const Config = NConfig as ConfigType;

export default Config;
