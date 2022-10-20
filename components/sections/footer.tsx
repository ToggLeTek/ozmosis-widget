import { useWallet } from '@cosmos-kit/react';
import {
  Grid,
  GridItem,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text,
  Divider,
  Link,
  Icon,
} from '@chakra-ui/react';
import { useEffect, useMemo } from 'react';
import {
  ChainCard
} from '..';
import { ChainName } from '@cosmos-kit/core';
import { assets as chainAssets } from 'chain-registry';
import { TbSeparatorVertical, TbExternalLink } from 'react-icons/tb'


export const FooterSection = ({ chainName }: { chainName?: ChainName }) => {
    const walletManager = useWallet();
    const {
      setCurrentChain,
      chains
    } = walletManager;
  
    const chainOptions = useMemo(
      () =>
        chains.map((chainRecord) => {
          const assets = chainAssets.find(
            (_chain) => _chain.chain_name === chainRecord.name
          )?.assets;
          return {
            chainName: chainRecord.name,
            label: chainRecord.chain.pretty_name,
            value: chainRecord.name,
            icon: assets
              ? assets[0]?.logo_URIs?.svg || assets[0]?.logo_URIs?.png
              : undefined,
            disabled: false
          };
        }),
      [chains]
    );
  
    const chain = chainOptions.find((c) => c.chainName === chainName);
  
    useEffect(() => {
      setCurrentChain(chainName);
    }, [chainName, setCurrentChain]);

return (
<>
<Divider pt={2.5}/>
<Grid
    w={'full'}
    templateColumns={'repeat(3, 1fr)'}
    templateRows={'repeat(2, 1fr)'}
    rowGap={0.5}
    justifyContent={'center'}>
    {chainName && (
    <GridItem
      rowSpan={2}
      colSpan={1}
      ml={8}
      mt={4}>
      <ChainCard
        prettyName={chain?.label || chainName}
        icon={chain?.icon}/>
    </GridItem>)}
  <GridItem
    colSpan={2}
    mt={2}>
    <Text
      variant={'footer'}
      textAlign={'center'}
      color={'brand.whiteAlpha.400'}>Built with <Link
      href={'https://cosmology.tech/'}
      target={'_blank'}
      rel={'noopener noreferrer'}>Cosmology</Link>, and OsmoJS by OzMage.<br/>
      Did something go awry? Visit:<br/>
    </Text>
  </GridItem>
  <GridItem
    colSpan={2}>
    <Text
      variant={'footer'}
      textAlign={'center'}
      color={'brand.whiteAlpha.400'}>
      <Breadcrumb
        spacing={'0.25rem'}
        separator={<Icon as={TbSeparatorVertical} fontSize={'1rem'} pos={'relative'} top={0.5}/>}>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={'#'}>OzMage Discord</BreadcrumbLink>
          <Icon as={TbExternalLink} fontSize={'0.75rem'} pos={'relative'} top={-1}/>
        </BreadcrumbItem>
        <BreadcrumbItem>
          <BreadcrumbLink
            href={'https://support.osmosis.zone/'}>Osmosis Support Lab</BreadcrumbLink>
          <Icon as={TbExternalLink} fontSize={'0.75rem'} pos={'relative'} top={-1}/>
        </BreadcrumbItem>
      </Breadcrumb>
    </Text>
  </GridItem>
</Grid>
</>
);};