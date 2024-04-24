import { Flex, Text, Box } from "@chakra-ui/react";
import Projects from "./components/projects";
import imageGoogle from "../assets/images/imageGoogle.png";

export default function SectionProjects() {
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
      >
        Projetos
      </Text>
      <Box>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"center"}
          gap={{ base: 10, md: 20 }}
          mb={10}
        >
          <Projects
            img={imageGoogle}
            titulo={"Projeto 1"}
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Clique aqui"
          />
          <Projects
            img={imageGoogle}
            titulo={"Projeto 1"}
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Clique aqui"
          />
        </Flex>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"center"}
          gap={{ base: 10, md: 20 }}
        >
          <Projects
            img={imageGoogle}
            titulo={"Projeto 1"}
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Clique aqui"
          />
          <Projects
            img={imageGoogle}
            titulo={"Projeto 1"}
            texto="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            link="Clique aqui"
          />
        </Flex>
      </Box>
    </Flex>
  );
}
