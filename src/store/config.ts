import { createSlice } from '@reduxjs/toolkit';
import { useAppSelector } from './hooks';
import { config, commonConfig } from './initialisers/config';

export interface Config {
  rpcUrl: string;
}

export interface ConfigOptions {
  [key: number]: Config;
}

export interface ConfigState {
  config: ConfigOptions;
  commonConfig: CommonConfig;
}

export interface CommonConfig {
  supportedNetworks: number[];
  appName: string;
  portisApiKey: string;
  etherscanApiKey: string;
  infuraApiKey: string;
}

const initialState: ConfigState = {
  config,
  commonConfig
};

export const configSlice = createSlice({
  name: 'config',
  initialState,
  reducers: {}
});

export const useConfig = (chainId: number) => {
  const config = useAppSelector((state) => state.config.config[chainId]);
  const commonConfig = useAppSelector((state) => state.config.commonConfig);
  return { config, commonConfig };
};

export default configSlice.reducer;
