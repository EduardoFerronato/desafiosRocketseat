import { Flex } from '@chakra-ui/react'
import { NextIcon } from './icons/NextIcon'
import { PlayIcon } from './icons/PlayIcon'
import { PrevIcon } from './icons/PrevIcon'

export const PlayerComponent = () => {
  return (
    <Flex w="190px" justify="space-between">
      <PrevIcon fontSize="3xl"/>
      <PlayIcon fontSize="3xl"/>
      <NextIcon fontSize="3xl"/>
    </Flex>
  )
}
