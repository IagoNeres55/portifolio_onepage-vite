import { Flex, Text, Box, Link, VStack } from "@chakra-ui/react";
import { Linkedin, Github, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <Box
      as="footer"
      mt={20}
      borderTop="1px solid"
      borderColor="whiteAlpha.100"
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
          <Text fontSize="1.6rem" fontWeight="700">
            Meu Contato
          </Text>
          <Flex align="center" gap={2} color="whiteAlpha.800">
            <Phone size={18} />
            <Text fontSize="1.05rem">(11) 95994-4937</Text>
          </Flex>
        </VStack>

        <VStack align={{ base: "center", md: "start" }} spacing={2}>
          <Text fontSize="1.6rem" fontWeight="700">
            E-mail
          </Text>
          <Flex align="center" gap={2} color="whiteAlpha.800">
            <Mail size={18} />
            <Link href="mailto:iagoneres90@gmail.com" fontSize="1.05rem">
              iagoneres90@gmail.com
            </Link>
          </Flex>
        </VStack>

        <Flex gap={5}>
          <Link href="https://github.com/IagoNeres55" isExternal>
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
        color="whiteAlpha.500"
        pb={6}
      >
        © {new Date().getFullYear()} Iago Neres — Desenvolvido com React & Chakra UI
      </Text>
    </Box>
  );
}
