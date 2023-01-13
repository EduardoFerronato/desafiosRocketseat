import { Box, Flex, GridItem, GridItemProps, Progress, Text } from '@chakra-ui/react'
import Image from 'next/image'
import { PlayerComponent } from './PlayerComponent'
import { TimeMusic } from './TimeMusic'

export const GridItem2 = (props: GridItemProps) => {
  return (
    <GridItem bg='#2A2141' borderRadius="2xl" {...props} p="10">

      <Flex flexDir="column" gap="5" align="center">
        <Flex align="center" gap="5">
          <Image src="/challenge01/ImagePlayer.png" width={84} height={84} alt="Image" />
          <Flex flexDir="column" >
            <Text fontWeight="bold" fontSize="24px">Acorda Devinho</Text>
            <Text color="#E1E1E6" fontSize="19px">Banda Rocketseat</Text>
          </Flex>
        </Flex>

        <PlayerComponent />

        <TimeMusic />
      </Flex>

    </GridItem>
  )
}
