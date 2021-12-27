import { BigNumber } from 'ethers';

export enum Queries {
  TOKEN_ICON = 'tokenIcon',
  LANDING_STATS = 'landingStats',
  BLOCK_TIMESTAMP = 'blockTimestamp',
  WALLET_ASSETS = 'walletAssets',
  SPACES = 'spaces',
  PROPOSALS = 'proposals'
}

export type TokenValue = {
  amount: BigNumber;
  amountNumber?: number;
  amountUSD?: number;
};

export type ERC721Token = {
  tokenID: string;
  address: string;
  symbol: string;
  decimals?: number;
  imageUrl?: string;
};


export enum STATUS {
  IDLE = 'idle',
  PENDING = 'pending',
  UPDATING = 'updating',
  SUCCEEDED = 'succeeded',
  FAILED = 'failed'
}

export type UserBalances = { [address: string]: ERC721Token };
