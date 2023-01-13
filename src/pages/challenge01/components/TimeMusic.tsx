import { Flex, Progress, Text } from '@chakra-ui/react'

export const TimeMusic = () => {
  const time = 1
  return (
    <Flex w="100%" h="10px" flexDir="column" gap="4">
      <Progress value={time} max={4} minW="100%" minH="10px"/>
      <Flex justify="space-between" color="#C4C4CC">
        <Text>{time}</Text>
        <Text>00:12</Text>
      </Flex>
    </Flex>
  )
}
