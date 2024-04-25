import { Flex, Text, Circle } from "@chakra-ui/react";

export default function abount() {
  const events = [
    {
      year: "2021",
      description:
        "Iniciei minha jornada no suporte técnico de TI, equilibrando responsabilidades profissionais com estudos acadêmicos.",
    },
    {
      year: "2022",
      description:
        "Avancei na minha carreira para a programação, trabalhando em pequenos projetos e fazendo a transição de suporte N1 para suporte N2, encarando novos desafios e expandindo minhas habilidades.",
    },
    {
      year: "2023",
      description:
        "Mergulhei no desenvolvimento mobile, criando alguns projetos que como controle de processos, sistemas de trafego entre outros onde adquirir muita experiência com aplicativos.",
    },
    {
      year: "2024",
      description:
        "Concluí minha graduação, com uma formação completa e já atuando como desenvolvedor, capacitado a construir soluções de software abrangentes.",
    },
  ];

  return (
    <Flex
      color={"white"}
      mt={150}
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
          {events.map((item) => (
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
