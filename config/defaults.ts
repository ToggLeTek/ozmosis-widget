import { StdFee } from '@cosmjs/amino';
import { assets } from 'chain-registry';
import { AssetList, Asset } from '@chain-registry/types';
import { SigningStargateClient } from '@cosmjs/stargate';
import { cosmos } from 'osmojs';

export const chainName = 'osmosis';

export const chainassets: AssetList = assets.find(
    (chain) => chain.chain_name === chainName
) as AssetList;

export const coin: Asset = chainassets.assets.find(
    (asset) => asset.base === 'uosmo'
) as Asset;
