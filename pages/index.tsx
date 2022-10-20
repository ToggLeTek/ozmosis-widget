import { useState } from 'react';
import { useWallet } from '@cosmos-kit/react';
import BigNumber from 'bignumber.js';

import {
  Box,
  Heading,
  Text,
  Container,
  Button,
  Flex,
  Icon,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react';
import { chainassets, chainName, coin } from '../config';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { WalletStatus } from '@cosmos-kit/core';
import {
  WalletSection,
  FooterSection,
  TopAssetSection,
  BottomAssetSection,
  ButtonGroupSection,
 } from '../components';
import { cosmos } from 'osmojs';
import Head from 'next/head';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  const {
    getStargateClient,
    address,
    currentWallet,
    walletStatus
  } = useWallet();

  const [balance, setBalance] = useState(new BigNumber(0));
  const getBalance = async () => {
    if (!address) {
      setBalance(new BigNumber(0));
      return;
    }

    let rpcEndpoint = await currentWallet?.getRpcEndpoint();

    if (!rpcEndpoint) {
      console.log('no rpc endpoint — using a fallback');
      rpcEndpoint = `https://rpc.cosmos.directory/${chainName}`;
    }

    // get RPC client
    const client = await cosmos.ClientFactory.createRPCQueryClient({
      rpcEndpoint
    });

    // fetch balance
    const balance = await client.cosmos.bank.v1beta1.balance({
      address,
      denom: chainassets?.assets[0].base as string
    });

    // Get the display exponent
    // we can get the exponent from chain registry asset denom_units
    const exp = coin.denom_units.find((unit) => unit.denom === coin.display)
      ?.exponent as number;

    // show balance in display values by exponentiating it
    if (!balance.balance) {
      let a = new BigNumber(0);
    } else {
      let a = new BigNumber(balance.balance.amount);
      const amount = a.multipliedBy(10 ** -exp);
      setBalance(amount);
    }
  };

  const color = useColorModeValue('primary.500', 'primary.200');
  return (
    <Container maxW="35em" m={5}>
      <Head>
        <title>OzWidget Example</title>
        <meta name="description" content="Generated by create cosmos app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Flex justifyContent="end" mb={4}>
        <Button variant="outline" px={0} onClick={toggleColorMode}>
          <Icon
            as={colorMode === 'light' ? BsFillMoonStarsFill : BsFillSunFill}
          />
        </Button>
      </Flex>
      <Box
        height='fit-content'
        width='30em'
        borderRadius='30px'
        overflow='hidden'
        bg='brand.eagle.0'>
        <Box
          height={'fit-content'}
          width={'fit-content'}
          mt={2}
          ml={245}
          mb={-6}>
        <ButtonGroupSection />
        </Box>
      <TopAssetSection />
      <BottomAssetSection />
      <WalletSection />

      {walletStatus === WalletStatus.Disconnected && (
        <Box textAlign="center">
          <Heading
            as="h3"
            fontSize={{ base: '1xl', sm: '2xl', md: '2xl' }}
            fontWeight="extrabold"
            m={30}
          >
            Connect your wallet!
          </Heading>
        </Box>
      )}

      {walletStatus === WalletStatus.Connected && (
        <Box textAlign="center">
          <Flex mb={4}>
            <Text as="span" color={color}>
              Balance: {balance.toNumber()}
            </Text>

            <Button variant="outline" onClick={getBalance}>
              Fetch Balance
            </Button>
          </Flex>
        </Box>
      )}
      <FooterSection chainName={chainName} />
      </Box>
    </Container>
  );
}
