import { Flex, Text, Link } from "@chakra-ui/react";
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
        <Text>
          <a href="#projetos" textDecoration="none">
            Projetos
          </a>
        </Text>
        <Text>
          <a href="#Tecnologias" textDecoration="none">
            Tecnologias
          </a>
        </Text>
        <Text>
          <a href="#Sobre" textDecoration="none">
            Sobre mim
          </a>
        </Text>
      </Flex>
      <Flex
        mr={{ base: 50, md: 0 }}
        gap={8}
        direction={{ base: "column", md: "row" }}
      >
        <Link href="https://github.com/IagoNeres55" isExternal>
          <Github size={25} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/iago-neres-81b368146/"
          isExternal
        >
          <Linkedin size={25} />
        </Link>
      </Flex>
    </Flex>
  );
}
