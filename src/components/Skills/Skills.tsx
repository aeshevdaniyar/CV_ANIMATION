import { Box, Text, HStack, Center, Flex } from "@chakra-ui/react";
import { useRef, MutableRefObject } from "react";
import { useAnimationValue } from "../AnimationScroll/useAnimationValue";
import { skillDetails } from "./skillsData";

const Skills = () => {
  const containerRef = useRef() as MutableRefObject<HTMLDivElement>;
  const title = "<div>HARD-скиллы</div>";

  const textValue = useAnimationValue({
    elementRef: containerRef,
    scrollRange: [0, 10],
    animationRange: [0, title.length],
  });

  const translateWidth = useAnimationValue({
    elementRef: containerRef,
    scrollRange: [15, 80],
    animationRange: [0, skillDetails.length],
  });

  const skillsWidth = useAnimationValue({
    elementRef: containerRef,
    scrollRange: [80, 90],
    animationRange: [100, 0],
  });

  const skillsOut = useAnimationValue({
    elementRef: containerRef,
    scrollRange: [90, 100],
    animationRange: [100, 0],
  });

  return (
    <Box
      px={{ base: "6", md: "6", lg: "20", sm: "10", xl: "28" }}
      pb="0"
      pt={{ base: "8", sm: "16", md: "20" }}
      mx="auto"
      maxW="1536"
      ref={containerRef}
      h={"1000vh"}
      position={"relative"}
    >
      <Text
        fontSize={{
          base: "7xl",
          lg: "7xl",
          md: "7xl",
          sm: "6xl",
          xs: "6xl",
        }}
        fontWeight="900"
      >
        <HStack>
          <Text bgGradient="linear(to-tr, teal.500, green.400)" bgClip="text">
            {title.slice(0, textValue)}
          </Text>
        </HStack>
      </Text>
      <Box
        position={"sticky"}
        top={100}
        left={0}
        boxShadow="2xl"
        borderRadius="3xl"
        my="10"
        bgColor="beige"
        h={"8%"}
        style={{
          width: `${skillsWidth}%`,
        }}
      >
        <Flex alignItems={"center"} h={"100%"} overflow={"hidden"} p={"2.5"}>
          <Flex
            style={{
              transition: "1s",
              transitionDelay: "0.5s",
              transform: `translateX(-${translateWidth * 100}%)`,
            }}
          >
            {skillDetails.map((item) => (
              <Box fontSize={"9xl"} minW={"100%"} key={item.key}>
                {item.icon}
              </Box>
            ))}
          </Flex>
        </Flex>
      </Box>
    </Box>
  );
};

export default Skills;
