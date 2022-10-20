import { useWallet } from '@cosmos-kit/react';
import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Text,
  NumberInput,
  NumberInputField,
  Heading,
  Code,
  Stack,
  Select,
  List
} from '@chakra-ui/react';
import { getLogo, selectableAssets } from '../../config/ozmology'
import { useEffect, useMemo } from 'react';
import {
  ChainCard
} from '..';
import { ChainName } from '@cosmos-kit/core';
import { MissingToken } from '../icons'
import { asset_list as chainAssets } from '@chain-registry/osmosis';
import build from 'next/dist/build';

let chosenAsset = getLogo('OSMO');

export function TopAssetSection() {
    return (
      <Flex
        bg={'brand.violet.0'}
        borderRadius={'35px'}
        m={2}
        mb={5}
        mt={5}
        shadow={'dark-lg'}>
        <Grid
          templateColumns={'repeat(2, 1fr)'}
          textAlign={'left'}
          ml={3}>
          <GridItem>
            <Avatar
              src={chosenAsset}
              size={'xl'} />
              </GridItem>
              <GridItem
                maxW={'5.5em'}
                alignSelf={'center'}
                p={2}>
        <Heading
          as={Select}
          variant={'h6-b'}
          p={1}
          iconSize={'0px'}>
          </Heading>
        <Text
          color={'brand.whiteAlpha.300'}
          fontStyle={'italic'}>Osmosis</Text>
          </GridItem>
              </Grid>
          <Grid
          textAlign={'left'}>
            <GridItem
              mt={2}>
                <Stack direction={'row'}>
          <Text
          fontSize={'2xs'}
          w={20}
          wordBreak={'break-word'}
          fontFamily={'Nova Mono'}
          color={'brand.whiteAlpha.600'}
          textAlign={'right'}
          fontStyle={'italic'}>Available Balance:</Text>
          <Code
          alignSelf={'center'}
          fontSize={'sm'}
          variant={'blackAlpha'}>123.123456789</Code></Stack>
        </GridItem>
        <GridItem>
        <NumberInput
          alignSelf={'center'}
          variant={'filled'}
          precision={18}
          defaultValue={1}
          size={'lg'}
          maxW={240}
          ml={2}>
            <NumberInputField
              placeholder={'420.690000000690000000'}
              borderRadius={'full'}
              textAlign={'right'}/>
              </NumberInput>
              </GridItem>
              </Grid>
          </Flex>
    );
};