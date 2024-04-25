import { Flex, Text, Box } from "@chakra-ui/react";
import Projects from "./components/projects";
import imageGoogle from "../assets/images/imageGoogle.png";
import projeto_fsw from "../assets/images/projeto_fsw.png";
import kmcontrole from "../assets/images/kmcontrole.png";
import previsaoTempo from "../assets/images/previsaoTempo.png";

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
        id="projetos"
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
            img={previsaoTempo}
            titulo={"Previsão do Tempo"}
            texto="Projeto simples, One page usando ferramentas como HTML, CSS, JS e BOOTSTRAP, consumindo APIs externas."
            link="https://dsf-consultacep.netlify.app/"
          />
          <Projects
            img={projeto_fsw}
            titulo={"E-commerce Loja Online"}
            texto="WebApp um projeto de e-commerce loja virtual de produtos gamer ferramantas utilizadas NextJs, risma, NodeJs e TypeScript."
            link=""
          />
        </Flex>
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          justifyContent={"center"}
          gap={{ base: 10, md: 20 }}
        >
          <Projects
            img={kmcontrole}
            titulo={"Gestão de Trafego"}
            texto="Projeto Mobile, feito utilizando React Native."
            link=""
          />
          <Projects
            img={imageGoogle}
            titulo={"Fav Repositórios"}
            texto="Uma Plataforma onde você pode salvar seus repositórios GitHub favoritos"
            link="https://github.com/IagoNeres55/FavoriteRepositoriesGitHub"
          />
        </Flex>
      </Box>
    </Flex>
  );
}
