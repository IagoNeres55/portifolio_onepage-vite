import { useState, useEffect } from "react";
import { Flex, Text, Button, Badge, HStack } from "@chakra-ui/react";
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
        setText(text + phrases[phraseIndex].charAt(index));
        setIndex(index + 1);
      }, 100);

      return () => clearTimeout(timeoutId);
    } else {
      setTimeout(() => {
        setText("");
        setIndex(0);
        setPhraseIndex((phraseIndex + 1) % phrases.length);
      }, 2000);
    }
  }, [text, index, phraseIndex]);

  return (
    <Flex
      justify="center"
      flexDirection="column"
      ml={{ base: "6%", md: "10%" }}
      mt={{ base: "12%", md: "8%" }}
    >
      <HStack spacing={2} mb={4} ml={{ base: "3%", md: 0 }}>
        <Badge
          borderRadius="full"
          px={3}
          py={1}
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.300"
          color="brand.100"
          fontWeight="500"
          textTransform="none"
        >
          Desenvolvedor Full Stack
        </Badge>
        <Badge
          borderRadius="full"
          px={3}
          py={1}
          bg="whiteAlpha.100"
          border="1px solid"
          borderColor="whiteAlpha.300"
          color="whiteAlpha.800"
          fontWeight="500"
          textTransform="none"
        >
          Guarulhos - SP
        </Badge>
      </HStack>

      <Text
        fontSize={{ base: "1.5rem", md: "2.5rem" }}
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        height={{ base: "24vh", md: "18vh" }}
        w={{ base: "90%", md: "80%" }}
      >
        {text}
      </Text>
      <Text
        color="#BCBCBC"
        w={{ base: "80%", md: "65%" }}
        ml="3%"
        mt={{ base: "5%", md: "1%" }}
        fontSize={{ base: "1rem", md: "1.4rem" }}
      >
        Desenvolvedor Full Stack com mais de 3 anos de experiência em T.I.,
        atuando na construção de aplicações web, mobile e back-end com
        arquiteturas escaláveis baseadas em microsserviços. Trabalho com
        containerização, CI/CD, cloud (AWS) e integração de soluções de
        Inteligência Artificial em produtos reais, sempre priorizando
        performance e qualidade.
      </Text>
      <HStack spacing={4} ml="3%" mt={{ base: "8%", md: "4%" }} flexWrap="wrap">
        <Button
          color="#fff"
          bgGradient="linear(to-r, #13ADC7, #6978D1, #945DD6)"
          borderRadius="28px"
          _hover={{ filter: "brightness(1.15)" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/iago-neres-81b368146/",
              "_blank"
            )
          }
        >
          Saber Mais
        </Button>
        <Button
          leftIcon={<Github size={18} />}
          variant="outline"
          borderColor="whiteAlpha.400"
          borderRadius="28px"
          color="white"
          _hover={{ bg: "whiteAlpha.100", borderColor: "brand.400" }}
          onClick={() => window.open("https://github.com/IagoNeres55", "_blank")}
        >
          GitHub
        </Button>
        <Button
          leftIcon={<Linkedin size={18} />}
          variant="outline"
          borderColor="whiteAlpha.400"
          borderRadius="28px"
          color="white"
          _hover={{ bg: "whiteAlpha.100", borderColor: "brand.400" }}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/iago-neres-81b368146/",
              "_blank"
            )
          }
        >
          LinkedIn
        </Button>
      </HStack>
    </Flex>
  );
}
