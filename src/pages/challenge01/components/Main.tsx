import { Flex, Grid } from '@chakra-ui/react'
import { GridItem1 } from './GridItem1'
import { GridItem2 } from './GridItem2'
import { GridItem3 } from './GridItem3'

export const Main = () => {
  return (
    <Flex align="center" justify="center" w="100vw" h="100vh" bg="#0F0D13">
      <Flex>
        <Grid
          gap={8}
          templateAreas={
            `"a b"
          "a c"`}
          gridTemplateRows={'300px 1fr'}
          gridTemplateColumns={'300px 1fr'}
        >
          <GridItem1 area="a" />
          <GridItem2 area="b"/>
          <GridItem3 area="c"/>
        </Grid>
      </Flex>
    </Flex>
  )
}
