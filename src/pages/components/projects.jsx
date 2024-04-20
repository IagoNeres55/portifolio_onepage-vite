import { Flex, Image, Text, Button } from "@chakra-ui/react";

export default function projects({ img, titulo, texto, link }) {
  return (
    <Flex
      borderWidth={1}
      borderColor={"white"}
      filter="brightness(1) drop-shadow(0 0 3px white)"
      borderStartStartRadius={20}
      borderEndEndRadius={20}
      width={"350px"}
      height={"60vh"}
      flexDirection={"column"}
      justify={"center"}
      alignItems={"center"}
      mt={"8%"}
    >
      <Image mb={3} w={80} objectFit="cover" src={img} alt="teste" />
      <Text mb={3} fontSize={"1.5rem"}>
        {titulo}
      </Text>
      <Text mb={3} w={"90%"} fontSize={".9rem"}>
        {texto}
      </Text>
      <Button
        fontSize={"0.8rem"}
        w={{ base: "30%", md: "40%" }}
        color="#fff"
        bgGradient="linear(to-r, #13ADC7, #6978D1, #945DD6)"
        borderRadius="28px"
        mt="2%"
        _hover="linear(to-r, #2cd4f1, #2f4be6, #8331e8)"
      >
        {link}
      </Button>
    </Flex>
  );
}
