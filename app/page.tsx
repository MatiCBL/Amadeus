import { Box, Flex, Text, Button, Link } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box
      width="100%"
      height="100vh"
      justifyContent="center"
      alignItems="center"
      display="flex"
    >
      <Flex
        width="100%"
        maxW="430px"
        align="center"
        justify="center"
        direction="column"
        mx="auto"
      >
        <Text fontSize="6xl" mb="10px">
          JournAI
        </Text>
        <Text fontSize="1xl">
          Create travel journal using AI, just type in what you need to plan
          holidays or business trips.
        </Text>
        <Link href="/journal">
          <Button mt={5}>Get started!</Button>
        </Link>
      </Flex>
    </Box>
  );
}
