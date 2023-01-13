import { Flex, GridItem, GridItemProps, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { PlayerComponent } from './PlayerComponent'
import { TimeMusic } from './TimeMusic'

export const GridItem1 = (props: GridItemProps) => {
  return (
    <GridItem bg='#2A2141' borderRadius="2xl" p="10" {...props}>
      <Flex flexDir="column" gap="5" justify="center" align="center" w="100%">
        <Image src="/challenge01/ImagePlayer.png" width={190} height={190} alt="ImagePlayer" />
        <Flex flexDir="column">
          <Text fontWeight="bold" fontSize="24px">Acorda Devinho</Text>
          <Text color="#E1E1E6" fontSize="19px">Banda Rocketseat</Text>
        </Flex>

        <PlayerComponent />

        <TimeMusic/>
      </Flex>
    </GridItem>
  )
}
