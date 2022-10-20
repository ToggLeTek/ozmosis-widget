import {
  Avatar,
  Flex,
  Grid,
  GridItem,
  Text,
  NumberInput,
  NumberInputField,
  Heading,
} from '@chakra-ui/react';

export function BottomAssetSection() {
    return (
    <Flex
      bg={'brand.violet.0'}
      borderRadius={'35px'}
      m={2}
      mb={5}
      mt={5}
      shadow={'dark-lg'}>
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
            <Grid
              templateColumns={'repeat(2, 1fr)'}
              textAlign={'right'}
              mr={3}>
            <GridItem
              maxW={'5.9em'}
              alignSelf={'center'}>
      <Heading
        variant={'h6'}>MAGE</Heading>
        <Text
          color={'brand.whiteAlpha.300'}
          fontStyle={'italic'}>OzMage</Text>
          </GridItem>
          <GridItem
            ml={1}>
          <Avatar
            size={'xl'}/>
            </GridItem>
            </Grid>
          </Flex>
    );
};