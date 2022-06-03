import { environmentsData } from './env_data';

export const getHomePageLink = (env) => environmentsData[env].domain || '/';
export const getEnvData = (env) => environmentsData[env];
