import { Flex, Text } from "@chakra-ui/react";
import Projects from "./components/projects";
import { listProjects } from "../assets/objects/listProjects";

export default function SectionProjects() {
  console.log("teste");
  return (
    <Flex
      color={"white"}
      mt={100}
      w={"full"}
      alignItems={"center"}
      justify={"center"}
      direction={"column"}
    >
      <Text
        width={{ base: "100%", md: "70%" }}
        fontSize={{ base: "1.8rem", md: "2.6rem" }}
        fontWeight={"600"}
        textAlign={{ base: "center", md: "start" }}
        mb={5}
        id="projetos"
      >
        Projetos
      </Text>

      <Flex
        borderRadius={12}
        p={5}
        wrap="wrap"
        justify="space-evenly"
        w="70%"
        alignItems="center"
      >
        {listProjects.map((project, index) => (
          <Flex
            key={index}
            flexDirection={{ base: "column", md: "row" }}
            justifyContent={"center"}
            gap={{ base: 10, md: 20 }}
            mb={10}
          >
            <Projects
              img={`../../../public/images/${project.img}`}
              titulo={project.titulo}
              texto={project.texto}
              link={project.link}
            />
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
