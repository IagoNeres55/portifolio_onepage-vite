import { Flex, Text, Button, SimpleGrid } from "@chakra-ui/react";
import { Github } from "lucide-react";
import Projects from "./components/projects";
import { listProjects } from "../assets/objects/listProjects";

export default function SectionProjects() {
  return (
    <Flex
      id="projetos"
      color="#171717"
      mt={{ base: 12, md: 20 }}
      w="full"
      alignItems="center"
      justify="center"
      direction="column"
      scrollMarginTop="90px"
      px={4}
    >
      <Text
        width={{ base: "100%", md: "70%" }}
        fontSize={{ base: "1.8rem", md: "2.6rem" }}
        fontFamily="heading"
        textTransform="uppercase"
        fontWeight="900"
        letterSpacing=".02em"
        textAlign={{ base: "center", md: "start" }}
        mb={2}
      >
        Projetos
      </Text>
      <Text
        width={{ base: "100%", md: "70%" }}
        color="#5c5851"
        textAlign={{ base: "center", md: "start" }}
        mb={10}
        fontSize={{ base: ".9rem", md: "1rem" }}
      >
        Uma seleção de projetos web, mobile e back-end em que apliquei arquitetura
        escalável, boas práticas e as tecnologias com as quais mais trabalho.
      </Text>

      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3 }}
        spacing={{ base: 8, md: 10 }}
        justifyItems="center"
        w={{ base: "100%", md: "86%" }}
        mb={10}
      >
        {listProjects.map((project) => (
          <Projects
            key={project.titulo}
            img={project.img}
            titulo={project.titulo}
            texto={project.texto}
            link={project.link}
            tecnologias={project.tecnologias}
            featured={project.featured}
            status={project.status}
          />
        ))}
      </SimpleGrid>

      <Button
        leftIcon={<Github size={18} />}
        variant="outline"
        borderColor="#171717"
        borderRadius="0"
        color="#171717"
        textTransform="uppercase"
        mb={10}
        _hover={{ bg: "#171717", color: "#fff" }}
        onClick={() => window.open("https://github.com/IagoNeres55", "_blank")}
      >
        Ver mais projetos no GitHub
      </Button>
    </Flex>
  );
}
