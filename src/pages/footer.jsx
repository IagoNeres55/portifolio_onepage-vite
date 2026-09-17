import { Flex, Text, Box, Link, VStack } from "@chakra-ui/react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <Box
      as="footer"
      mt={20}
      borderTop="1px solid"
      borderColor="#171717"
    >
      <Flex
        direction={{ base: "column", md: "row" }}
        justify="space-around"
        align="center"
        py={{ base: 10, md: 0 }}
        h={{ base: "auto", md: "35vh" }}
        gap={{ base: 8, md: 0 }}
      >
        <VStack align={{ base: "center", md: "start" }} spacing={2}>
          <Text fontSize="1.6rem" fontWeight="900" fontFamily="heading" textTransform="uppercase">
            Meu Contato
          </Text>
          <Flex align="center" gap={2} color="#5c5851">
            <Phone size={18} />
            <Text fontSize="1.05rem">(11) 95994-4937</Text>
          </Flex>
        </VStack>

        <VStack align={{ base: "center", md: "start" }} spacing={2}>
          <Text fontSize="1.6rem" fontWeight="900" fontFamily="heading" textTransform="uppercase">
            E-mail
          </Text>
          <Flex align="center" gap={2} color="#5c5851">
            <Mail size={18} />
            <Link href="mailto:iagoneres90@gmail.com" fontSize="1.05rem">
              iagoneres90@gmail.com
            </Link>
          </Flex>
        </VStack>

        <Flex gap={5}>
          <Link href="https://github.com/IagoNeres55" isExternal color="#171717">
            <Github size={32} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/iago-neres-81b368146/"
            isExternal
          >
            <Linkedin size={32} />
          </Link>
        </Flex>
      </Flex>
      <Text
        textAlign="center"
        fontSize=".8rem"
        color="#5c5851"
        pb={6}
      >
        © {new Date().getFullYear()} Iago Neres — Desenvolvido com React & Chakra UI
      </Text>
    </Box>
  );
}
