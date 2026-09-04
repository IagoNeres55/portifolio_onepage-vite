import { useState } from "react";
import { Box, Flex, Text, Link, IconButton, Collapse } from "@chakra-ui/react";
import { Github, Linkedin, Menu, X } from "lucide-react";

const links = [
  { href: "#projetos", label: "Projetos" },
  { href: "#Tecnologias", label: "Tecnologias" },
  { href: "#Sobre", label: "Sobre mim" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Box
      as="nav"
      position="sticky"
      top={0}
      zIndex={20}
      bg="rgba(11, 17, 32, 0.75)"
      backdropFilter="blur(10px)"
      borderBottom="1px solid"
      borderColor="whiteAlpha.100"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        w="full"
        h={16}
        align="center"
        justify="space-between"
        px={{ base: 4, md: 8 }}
      >
        <Link href="#" _hover={{ textDecoration: "none" }}>
          <Text
            fontWeight="700"
            fontSize="1.15rem"
            bgGradient="linear(to-r, #13ADC7, #6978D1, #945DD6)"
            bgClip="text"
          >
            Iago Neres
          </Text>
        </Link>

        <Flex display={{ base: "none", md: "flex" }} gap={10} align="center">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              fontSize=".95rem"
              _hover={{ color: "#13ADC7", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </Flex>

        <Flex display={{ base: "none", md: "flex" }} gap={5} align="center">
          <Link href="https://github.com/IagoNeres55" isExternal>
            <Github size={22} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/iago-neres-81b368146/"
            isExternal
          >
            <Linkedin size={22} />
          </Link>
        </Flex>

        <IconButton
          display={{ base: "flex", md: "none" }}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          icon={isOpen ? <X size={22} /> : <Menu size={22} />}
          variant="ghost"
          color="white"
          _hover={{ bg: "whiteAlpha.100" }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <Flex
          direction="column"
          gap={4}
          px={6}
          pb={6}
          display={{ base: "flex", md: "none" }}
        >
          {links.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Flex gap={5} mt={2}>
            <Link href="https://github.com/IagoNeres55" isExternal>
              <Github size={22} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/iago-neres-81b368146/"
              isExternal
            >
              <Linkedin size={22} />
            </Link>
          </Flex>
        </Flex>
      </Collapse>
    </Box>
  );
}
