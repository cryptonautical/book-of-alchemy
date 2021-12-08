import { FC } from 'react';
import { useWeb3React } from '../../hooks/web3';
import { Tag, TagProps } from '@chakra-ui/react';
import { metamaskNetworkColors } from '../../helpers/network';
import { convertChainIdToNetworkName } from '../../utils/convertChainIdToNetworkName';

const NetworkPill: FC<TagProps> = (props) => {
  const { chainId = 1 } = useWeb3React();

  return (
    <Tag
      borderRadius='xl'
      color={metamaskNetworkColors[chainId]}
      _hover={{ cursor: 'default' }}
      {...props}
    >
      {convertChainIdToNetworkName(chainId)}
    </Tag>
  );
};

export default NetworkPill;
