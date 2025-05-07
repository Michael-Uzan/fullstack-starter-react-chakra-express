import { Text, VStack } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <VStack backgroundColor="black" color="white" p="10px" w="100%" gap="10px">
      <Text fontSize="2xl">Fullstack Starter</Text>
      <Text fontSize="sm">React | TS | Chakra UI | Node | Express</Text>
      <Text fontSize="sm">Michael Uzan</Text>
    </VStack>
  );
};
