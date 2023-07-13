import {
  Button,
  VStack,
  Flex,
  Stack,
  Heading,
  Text,
  Link,
  ButtonGroup,
  Box,
} from "@chakra-ui/react";
import SocialProfiles from "./SocialProfiles";

const Hero = () => {
  return (
    <Box
      px={{ base: "6", md: "6", lg: "20", sm: "10", xl: "28" }}
      pb="0"
      pt={{ base: "8", sm: "16", md: "20" }}
      mx="auto"
      maxW="1536"
      h={"100vh"}
    >
      <VStack
        m="auto"
        my="10"
        mt={{ base: 10, md: 10, lg: 10, sm: 10, xs: "4em" }}
        zIndex="100"
      >
        <Link
          href="https://github.com/aeshevdaniyar"
          textDecoration="none"
          isExternal={true}
          style={{ textDecoration: "none" }}
        >
          <Button
            borderRadius="full"
            borderColor="blue.600"
            h="30px"
            fontSize={{ base: "sm", sm: "sm", xs: "xs" }}
            borderWidth="2px"
          >
            Привет, Я Frontend Developer
          </Button>
        </Link>
      </VStack>
      <Flex
        // display={{ base: "flex", md: "flex", sm: "block", xs: "block" }}
        flex={{ base: 1, md: 1, sm: 0, xs: 0 }}
        justify="space-between"
        direction={{
          base: "row",
          md: "row",
          sm: "column-reverse",
          xs: "column-reverse",
        }}
      >
        <Stack>
          <Heading
            fontSize={{ md: "6xl", lg: "6xl", sm: "4xl", xs: "3xl" }}
            fontWeight="extrabold"
          >
            <Stack display="flex" direction="row">
              <Text colorScheme="black">Я</Text>
              <Text
                bgGradient="linear(to-tr, teal.500, green.400)"
                bgClip="text"
              >
                Аешев Данияр,
              </Text>
            </Stack>
            <Stack display="flex" direction="row">
              <Text colorScheme="black">Front-end</Text>
              <Text
                bgGradient="linear(to-tr, teal.500, green.400)"
                bgClip="text"
              >
                developer
              </Text>
            </Stack>
          </Heading>
          <Text py="5" colorScheme="black" fontWeight="400">
            Я разрабатываю и создаю{" "}
            <span
              style={{
                color: "var(--chakra-colors-teal-500)",
                fontWeight: 500,
              }}
            >
              функциональные и красивые приложения
            </span>{" "}
            со страстью, уделяя особое внимание{" "}
            <span
              style={{
                color: "var(--chakra-colors-teal-500)",
                fontWeight: 500,
              }}
            >
              пользовательскому опыту
            </span>{" "}
            и{" "}
            <span
              style={{
                color: "var(--chakra-colors-teal-500)",
                fontWeight: 500,
              }}
            >
              высокому качеству.
            </span>{" "}
          </Text>

          <Stack py="4">
            <SocialProfiles />
          </Stack>
        </Stack>
      </Flex>
    </Box>
  );
};

export default Hero;
