import { Flex, Text, Circle } from "@chakra-ui/react";
import { trilhaDev } from "../assets/objects/trilhaDev";
export default function abount() {
  return (
    <Flex
      color={"white"}
      mt={260}
      justify={"center"}
      alignItems={"center"}
      w={"full"}
      flexDirection={"column"}
      mb={{ base: 0, md: 200, lg: 50 }}
    >
      <Text
        // width={}
        w="75%"
        fontSize={{ base: "1.8rem", md: "2.6rem" }}
        fontWeight={"600"}
        textAlign={{ base: "center", md: "start" }}
        id="Sobre"
      >
        Sobre mim
      </Text>

      <Flex
        direction="column"
        align="center"
        w="full"
        p={5}
        color="white"
        borderRadius="md"
      >
        <Flex
          position="relative"
          w="75%"
          justify="space-between"
          align="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex
            position="absolute"
            h="1px"
            top="22px"
            bg="white"
            w={{ base: 0, md: "full" }}
          />
          {trilhaDev.map((item) => (
            <Flex
              fontSize={"1rem"}
              key={item.year}
              direction={"column"}
              align={{ base: "start", md: "center" }}
              // textAlign="center"
              w="full"
              p={4}
            >
              <Flex
                gap={2}
                direction={"column"}
                alignItems={"center"}
                h={{ base: "25vh", md: "20vh" }}
              >
                <Circle size="15px" bg="white" />
                <Text fontWeight="bold">{item.year}</Text>
                <Text
                  key={item.year}
                  fontSize="sm"
                  mt={{ base: 0, md: 2 }}
                  whiteSpace={"wrap"}
                  textOverflow={"ellipsis"}
                  textAlign={"center"}
                >
                  {item.description}
                </Text>
              </Flex>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
