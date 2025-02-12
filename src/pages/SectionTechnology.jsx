import { Flex, Box, Icon, Text } from "@chakra-ui/react";
import {
  FaAws,
  FaDocker,
  FaGitAlt,
  FaNodeJs,
  FaPython,
  FaReact,
} from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import {
  SiTypescript,
  SiChakraui,
  SiNextdotjs,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiFirebase,
  SiAngular,
  SiTailwindcss,
  SiNestjs,
  SiExpress,
  SiJest,
  SiCypress,
  SiMysql,
  SiAndroid,
  SiApple,
  SiExpo,
  SiRedux,
  SiOracle,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";

export default function SectionTechnology() {
  const technologies = [
    { name: "Node.js", icon: FaNodeJs, color: "green.500" },
    { name: "React", icon: FaReact, color: "blue.500" },
    { name: "TypeScript", icon: SiTypescript, color: "blue.300" },
    { name: "Next.js", icon: SiNextdotjs, color: "white" },
    { name: "Angular", icon: SiAngular, color: "red.500" },
    { name: "Tailwindcss", icon: SiTailwindcss, color: "teal.500" },
    { name: "Nest.js", icon: SiNestjs, color: "red.500" },
    { name: "Express.js", icon: SiExpress, color: "yellow.400" },
    { name: "Git", icon: FaGitAlt, color: "orange.600" },
    
    { name: "Docker", icon: FaDocker, color: "blue.500" },
    { name: "AWS", icon: FaAws, color: "blue.500" },

    { name: "AZURE", icon: VscAzure, color: "orange.500",  },
    { name: "Redux", icon: SiRedux, color: "purple.500",  },
    { name: "Oracle", icon: GrOracle, color: "orange.500",  },
    // { name: "Kubernetes", icon: SiKubernetes, color: "blue.400" },
    { name: "MongoDB", icon: SiMongodb, color: "green.500" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "blue.500" },
    { name: "Redis", icon: SiRedis, color: "red.500" },
    { name: "Firebase", icon: SiFirebase, color: "yellow.400" },
    { name: "Chakra UI", icon: SiChakraui, color: "teal.500" },
    { name: "Python", icon: FaPython, color: "yellow.400" },
    { name: "Jest", icon: SiJest, color: "green.400" },
    { name: "Cypress", icon: SiCypress, color: "white" },
    { name: "MySql", icon: SiMysql, color: "yellow.400" },
    { name: "Android", icon: SiAndroid, color: "green.500" },
    { name: "Apple", icon: SiApple, color: "white" },
    { name: "Expo", icon: SiExpo, color: "white" },
  ];

  return (
    <Flex
      direction={{ base: "row", md: "row" }}
      wrap="wrap"
      justify="center"
      align="center"
      w="full"
      h={{ base: "auto", md: 65 }}
      p={{ base: 4, md: 0 }}
      mt={53}
    >
      <Text
        w="75%"
        fontSize={{ base: "1.8rem", md: "2.6rem" }}
        fontWeight={"600"}
        textAlign={{ base: "center", md: "start" }}
        id="Tecnologias"
      >
        Tecnologias
      </Text>
      <Flex justify="center" my="25px">
        <Flex
          borderWidth={1}
          borderColor={"white"}
          filter="brightness(1) drop-shadow(0 0 3px white)"
          borderRadius={12}
          p={5}
          wrap="wrap"
          justify="center"
          w="70%"
          alignItems="center"
        >
          {technologies.map((tech, index) => (
            <Box
              // bgColor="#fff"
              key={tech.name}
              mx={4}
              mb={index % 8 === 7 ? 4 : 0}
            >
              <Icon as={tech.icon} w={10} h={10} color={tech.color} />
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
}
