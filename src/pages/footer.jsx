import { Flex, Text, Box } from "@chakra-ui/react";
import { Linkedin, Figma, Github } from "lucide-react";

export default function Footer() {
  return (
    <Flex
      direction={{ base: "column", md: "row" }}
      justify="space-around"
      h="40vh"
      align={"center"}

    >
      <Box>
        <Text fontSize={"2rem"} fontWeight={"700"}>
          Meu Contato
        </Text>
        <Text fontSize={"1.2rem"}> 11-959944937</Text>
      </Box>
      <Box>
        <Text fontSize={"2rem"} fontWeight={"700"}>
          E-mail
        </Text>
        <Text fontSize={"1.2rem"}>iagoneres90@gmail.com</Text>
      </Box>
      <Box display={"flex"} flexDirection={"row"} gap={5} mb={10}>
        <Github size={40} />
        <Linkedin size={40} />
        <Figma size={40} />
      </Box>
    </Flex>
  );
}
