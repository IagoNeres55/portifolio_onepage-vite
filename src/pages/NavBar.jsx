import { Flex, Text } from "@chakra-ui/react";
import { Github, Linkedin } from "lucide-react";

export default function NavBar() {
  return (
    <Flex
      direction={{ base: "row", md: "row" }}
      w="full"
      h={{ base: "auto", md: 65 }}
      alignItems={{ base: "start", md: "center" }}
      p={{ base: 4, md: 0 }}
    >
      <Flex
        justifyContent="center"
        w={{ base: "full", md: "80%" }}
        gap={{ base: 2, md: 20 }}
        direction={{ base: "column", md: "row" }}
        alignItems={{ base: "start", md: "center" }}
        ml={{ base: 50, md: 0 }}
      >
        <Text>Projetos</Text>
        <Text>Tecnologias</Text>
        <Text>Sobre mim</Text>
      </Flex>
      <Flex
        mr={{ base: 50, md: 0 }}
        gap={8}
        direction={{ base: "column", md: "row" }}
      >
        <Github size={25} />
        <Linkedin size={25} />
      </Flex>
    </Flex>
  );
}
