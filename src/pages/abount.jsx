import { Flex, Text, Circle } from "@chakra-ui/react";

export default function abount() {
  return (
    <Flex color={"white"} mt={100} w={"full"} justify={"center"}>
      <Text width={"70%"} fontSize={"2.2rem"} fontWeight={"600"}>
        Sobre mim
        <Flex
          direction="column"
          align="center"
          w="full"
          p={5}
          color="white"
          borderRadius="md"
          boxShadow="md"
        >
          <Flex
            position="relative"
            w="full"
            justify="space-between"
            align="center"
          >
            <Flex position="absolute" h="1px" top="22px" bg="white" w="full" />
            {["2018", "2019", "2020", "2021"].map((year) => (
              <Flex
                fontSize={"1rem"}
                key={year}
                direction="column"
                align="center"
                textAlign="center"
                w="full"
                p={4}
              >
                <Circle size="15px" bg="white" mb={3} />
                <Text fontWeight="bold">{year}</Text>
                <Text fontSize="sm" mt={3}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Text>
              </Flex>
            ))}
          </Flex>
        </Flex>
      </Text>
    </Flex>
  );
}
