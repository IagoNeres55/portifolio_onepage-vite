import { useState, useEffect } from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
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
    <Flex justify="center" flexDirection="column" ml="10%" mt="8%">
      <Text
        fontSize={{ base: "1.5rem", md: "2.5rem" }}
        fontFamily={"Poppins, sans-serif"}
        fontWeight="600"
        height={{ base: "24vh", md: "18vh" }}
        w={"80%"}
      >
        {text}
      </Text>
      <Text
        color="#BCBCBC"
        w={{ base: "70%", md: "65%" }}
        ml="3%"
        mt={{ base: "5%", md: "1%" }}
        fontSize={{ base: "1rem", md: "1.4rem" }}
      >
        Tenho 24 anos e sou formado em Análise e Desenvolvimento de Sistemas.
        Atuo como desenvolvedor há mais de 2 anos, sempre pensando além dos limites
        convencionais para entregar soluções rápidas e precisas. Meu principal
        objetivo é gerar valor através das minhas entregas, priorizando sempre a
        qualidade e a escalabilidade dos produtos.
      </Text>
      <Button
        w={{ base: "45%", md: "16%" }}
        color="#fff"
        bgGradient="linear(to-r, #13ADC7, #6978D1, #945DD6)"
        borderRadius="28px"
        ml="4%"
        mt={{ base: "8%", md: "4%" }}
        _hover="linear(to-r, #2cd4f1, #2f4be6, #8331e8)"
        onClick={() => {
          window.open(
            "https://www.linkedin.com/in/iago-neres-81b368146/",
            "_blank"
          );
        }}
      >
        Saber Mais
      </Button>
    </Flex>
  );
}
