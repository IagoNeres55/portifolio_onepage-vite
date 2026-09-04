import { Flex, Text, Circle } from "@chakra-ui/react";
import { trilhaDev } from "../assets/objects/trilhaDev";

export default function Abount() {
  return (
    <Flex
      id="Sobre"
      color="white"
      mt={{ base: 24, md: 32 }}
      justify="center"
      alignItems="center"
      w="full"
      flexDirection="column"
      mb={{ base: 20, md: 32 }}
      scrollMarginTop="90px"
      px={4}
    >
      <Text
        w={{ base: "100%", md: "75%" }}
        fontSize={{ base: "1.8rem", md: "2.6rem" }}
        fontWeight="600"
        textAlign={{ base: "center", md: "start" }}
        mb={4}
      >
        Sobre mim
      </Text>

      <Text
        w={{ base: "100%", md: "75%" }}
        color="#BCBCBC"
        textAlign={{ base: "center", md: "start" }}
        fontSize={{ base: "1rem", md: "1.15rem" }}
        mb={12}
      >
        Sou formado em Análise e Desenvolvimento de Sistemas e atuo há mais de 3
        anos em T.I., os últimos como Desenvolvedor Full Stack. Gosto de pensar
        além dos limites convencionais das entregas, priorizando arquiteturas
        escaláveis, manutenibilidade e segurança — do back-end ao mobile, passando
        por cloud, DevOps e, mais recentemente, pela integração de soluções de
        Inteligência Artificial em produtos reais.
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
          w={{ base: "100%", md: "80%" }}
          justify="space-between"
          align="center"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Flex
            position="absolute"
            h="2px"
            top="22px"
            bgGradient="linear(to-r, #13ADC7, #6978D1, #945DD6)"
            w={{ base: 0, md: "full" }}
          />
          {trilhaDev.map((item) => (
            <Flex
              fontSize="1rem"
              key={item.year}
              direction="column"
              align={{ base: "start", md: "center" }}
              w="full"
              p={4}
            >
              <Flex
                gap={2}
                direction="column"
                alignItems="center"
                h={{ base: "auto", md: "22vh" }}
              >
                <Circle
                  size="15px"
                  bgGradient="linear(to-r, #13ADC7, #945DD6)"
                  border="3px solid"
                  borderColor="#0b1120"
                />
                <Text fontWeight="bold" bgGradient="linear(to-r, #13ADC7, #945DD6)" bgClip="text">
                  {item.year}
                </Text>
                <Text
                  fontSize="sm"
                  mt={{ base: 0, md: 2 }}
                  whiteSpace="wrap"
                  textAlign="center"
                  color="whiteAlpha.800"
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
