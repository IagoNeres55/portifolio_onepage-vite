import { Flex, Text, Button } from "@chakra-ui/react";
import "@fontsource/poppins";
export default function SectionText() {
  return (
    <Flex justify="center" flexDirection="column" ml="10%" mt="8%">
      <Text
        fontSize={{ base: "1.7rem", md: "2.6rem" }}
        fontFamily={"Poppins, sans-serif"}
        fontWeight="600"
      >
        Lorem ipsum dolor sit amet
      </Text>
      <Text
        color="#BCBCBC"
        w={{ base: "70%", md: "50%" }}
        ml="3%"
        mt={{ base: "5%", md: "1%" }}
        fontSize={{ base: "1.3rem", md: "1.6rem" }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.{" "}
      </Text>
      <Button
        w={{ base: "45%", md: "16%" }}
        color="#fff"
        bgGradient="linear(to-r, #13ADC7, #6978D1, #945DD6)"
        borderRadius="28px"
        ml="4%"
        mt={{ base: "8%", md: "4%" }}
        _hover="linear(to-r, #2cd4f1, #2f4be6, #8331e8)"
      >
        Saber Mais
      </Button>
    </Flex>
  );
}
