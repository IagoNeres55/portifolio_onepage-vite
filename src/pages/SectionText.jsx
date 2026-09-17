import { useEffect, useState } from "react";
import { Flex, Text, Button, Badge, HStack, Box, Image } from "@chakra-ui/react";
import { Github, Linkedin } from "lucide-react";
import "@fontsource/poppins";
import { phrases } from "../assets/objects/textApresents";

export default function SectionText() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  useEffect(() => {
    if (index < phrases[phraseIndex].length) {
      const timeoutId = setTimeout(() => {
        setText((current) => current + phrases[phraseIndex].charAt(index));
        setIndex((current) => current + 1);
      }, 70);
      return () => clearTimeout(timeoutId);
    }

    const timeoutId = setTimeout(() => {
      setText("");
      setIndex(0);
      setPhraseIndex((current) => (current + 1) % phrases.length);
    }, 2200);
    return () => clearTimeout(timeoutId);
  }, [text, index, phraseIndex]);

  return (
    <Flex
      maxW="1280px"
      mx="auto"
      px={{ base: 5, md: 10 }}
      pt={{ base: 10, md: 14 }}
      pb={{ base: 16, md: 24 }}
      gap={{ base: 10, lg: 4 }}
      align="center"
      direction={{ base: "column", lg: "row" }}
    >
      <Flex flex="1" direction="column" position="relative" zIndex={1}>
        <HStack spacing={3} mb={6} flexWrap="wrap">
          <Badge
            px={3}
            py={1}
            bg="#171717"
            color="#ece8df"
            borderRadius="0"
            fontWeight="500"
            letterSpacing=".12em"
          >
            SISTEMAS
          </Badge>
          <Text fontFamily="mono" fontSize=".8rem">
            /
          </Text>
          <Badge
            px={0}
            py={1}
            bg="transparent"
            color="#171717"
            borderRadius="0"
            fontWeight="500"
            letterSpacing=".12em"
          >
            DESENVOLVIMENTO / TECNOLOGIA
          </Badge>
        </HStack>

        <Text
          fontSize={{ base: "3rem", md: "5.7rem" }}
          fontFamily="heading"
          textTransform="uppercase"
          lineHeight=".82"
          letterSpacing="-.05em"
          fontWeight="900"
          minH="auto"
          maxW="700px"
        >
          IAGO NERES
          <br />
          FULL STACK
          <br />
          DEVELOPER
        </Text>
        <Flex align="center" gap={3} mt={7} mb={1}>
          <Box w="28px" h="3px" bg="#ff5a1f" />
          <Text
            color="#5c5851"
            fontFamily="mono"
            fontSize={{ base: ".75rem", md: ".85rem" }}
            letterSpacing=".08em"
            textTransform="uppercase"
            minH="1.4em"
          >
            {text}
          </Text>
        </Flex>
        <Text
          color="#3d3a35"
          maxW="610px"
          mt={5}
          fontSize={{ base: "1rem", md: "1.15rem" }}
          lineHeight="1.8"
        >
          Desenvolvedor Full Stack com mais de 3 anos de experiência em T.I.,
          transformando ideias em soluções digitais escaláveis para web, mobile e
          back-end. Trabalho com microsserviços, cloud, CI/CD e Inteligência
          Artificial aplicada a produtos reais.
        </Text>
        <HStack spacing={3} mt={8} flexWrap="wrap">
          <Button
            color="#fff"
            bg="#ff5a1f"
            borderRadius="0"
            textTransform="uppercase"
            letterSpacing=".08em"
            _hover={{ bg: "#171717" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/iago-neres-81b368146/", "_blank")
            }
          >
            Saber mais
          </Button>
          <Button
            leftIcon={<Github size={18} />}
            variant="outline"
            borderColor="#171717"
            borderRadius="0"
            color="#171717"
            textTransform="uppercase"
            _hover={{ bg: "#171717", color: "#fff" }}
            onClick={() => window.open("https://github.com/IagoNeres55", "_blank")}
          >
            GitHub
          </Button>
          <Button
            leftIcon={<Linkedin size={18} />}
            variant="outline"
            borderColor="#171717"
            borderRadius="0"
            color="#171717"
            textTransform="uppercase"
            _hover={{ bg: "#171717", color: "#fff" }}
            onClick={() =>
              window.open("https://www.linkedin.com/in/iago-neres-81b368146/", "_blank")
            }
          >
            LinkedIn
          </Button>
        </HStack>
      </Flex>

      <Box
        flex="1.15"
        w="full"
        position="relative"
        transform={{ lg: "rotate(2deg)" }}
      >
        <Box
          position="absolute"
          inset={{ base: "10px -8px -10px 10px", md: "16px -14px -16px 16px" }}
          bg="#ff5a1f"
          clipPath="polygon(4% 2%, 98% 0, 100% 96%, 2% 100%, 0 8%)"
        />
        <Box
          position="relative"
          overflow="visible"
          bg="transparent"
        >
          <Image
            src="/images/img-minha-formal.jpg"
            alt="Iago Neres, desenvolvedor Full Stack"
            w="full"
            h="auto"
            maxH={{ base: "420px", md: "560px" }}
            objectFit="contain"
            objectPosition="center"
            transform="none"
          />
        </Box>
        <Box
          position="absolute"
          top={{ base: "-12px", md: "-20px" }}
          right={{ base: "18px", md: "38px" }}
          w={{ base: "54px", md: "78px" }}
          h={{ base: "18px", md: "25px" }}
          bg="#fff"
          transform="rotate(8deg)"
          boxShadow="0 1px 4px rgba(0,0,0,.2)"
        />
        <Text
          position="absolute"
          bottom={{ base: "18px", md: "28px" }}
          left={{ base: "14px", md: "24px" }}
          color="#fff"
          fontFamily="mono"
          fontSize=".8rem"
          bg="#171717"
          px={3}
          py={2}
          transform="rotate(-2deg)"
        >
          &gt;_ build(ideas)
        </Text>
        <Text
          position="absolute"
          bottom={{ base: "-28px", md: "-36px" }}
          right="4px"
          color="#171717"
          fontFamily="cursive"
          fontSize={{ base: ".85rem", md: "1rem" }}
          transform="rotate(-4deg)"
        >
          sempre aprendendo.
        </Text>
      </Box>
    </Flex>
  );
}
