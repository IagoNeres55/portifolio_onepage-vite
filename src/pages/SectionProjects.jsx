import { Flex, Text } from "@chakra-ui/react";
import Projects from "./components/projects";
import imageGoogle from "../assets/images/imageGoogle.png";

export default function SectionProjects() {
  return (
    <Flex color={"white"} mt={100} w={"full"} justify={"center"}>
      <Text width={"70%"} fontSize={"2.6rem"} fontWeight={"600"}>
        Projetos
        <Flex flexDirection={"row"} justifyContent={"center"} gap={20}>
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
        <Flex flexDirection={"row"} justifyContent={"center"} gap={20}>
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
      </Text>
    </Flex>
  );
}
