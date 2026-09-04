/* eslint-disable react/prop-types */
import { Flex, Image, Text, Button, Badge, Wrap, WrapItem } from "@chakra-ui/react";
import { Github, Lock, Sparkles, Hammer } from "lucide-react";

export default function Projects({
  img,
  titulo,
  texto,
  link,
  tecnologias = [],
  featured = false,
  status,
}) {
  return (
    <Flex
      bg="bg.surface"
      border="1px solid"
      borderColor={featured ? "brand.400" : "bg.border"}
      backdropFilter="blur(6px)"
      borderRadius="20px"
      w={{ base: "280px", md: "340px" }}
      gridColumn={featured ? { base: "auto", md: "span 2" } : "auto"}
      minH="480px"
      flexDirection="column"
      overflow="hidden"
      position="relative"
      transition="all 0.25s ease"
      boxShadow={featured ? "0 12px 30px rgba(19, 173, 199, 0.18)" : "none"}
      _hover={{
        transform: "translateY(-8px)",
        borderColor: "brand.400",
        boxShadow: "0 12px 30px rgba(19, 173, 199, 0.18)",
      }}
    >
      {featured && (
        <Badge
          position="absolute"
          top={3}
          left={3}
          zIndex={1}
          display="flex"
          alignItems="center"
          gap={1}
          px={3}
          py={1}
          borderRadius="full"
          bgGradient="linear(to-r, #13ADC7, #6978D1, #945DD6)"
          color="#fff"
          fontWeight="600"
          fontSize="0.7rem"
          textTransform="none"
        >
          <Sparkles size={12} /> Projeto em destaque
        </Badge>
      )}

      {img ? (
        <Image
          h={featured ? "220px" : "170px"}
          w="full"
          objectFit="cover"
          src={`/images/${img}`}
          alt={titulo}
        />
      ) : (
        <Flex
          h={featured ? "220px" : "170px"}
          w="full"
          align="center"
          justify="center"
          bgGradient="linear(135deg, #0f1624, #1b2440)"
          fontSize="2.2rem"
          fontWeight="700"
          color="whiteAlpha.300"
          fontFamily="mono"
        >
          {"</>"}
        </Flex>
      )}

      <Flex direction="column" flex="1" p={5} gap={3}>
        <Text fontSize="1.25rem" fontWeight="600">
          {titulo}
        </Text>
        <Text fontSize=".9rem" color="whiteAlpha.800" flex="1">
          {texto}
        </Text>

        {tecnologias.length > 0 && (
          <Wrap>
            {tecnologias.map((tech) => (
              <WrapItem key={tech}>
                <Badge
                  px={2}
                  py={0.5}
                  borderRadius="full"
                  bg="whiteAlpha.100"
                  color="brand.100"
                  fontWeight="500"
                  fontSize="0.65rem"
                  textTransform="none"
                >
                  {tech}
                </Badge>
              </WrapItem>
            ))}
          </Wrap>
        )}

        {link ? (
          <Button
            leftIcon={<Github size={16} />}
            fontSize="0.85rem"
            color="#fff"
            bgGradient="linear(to-r, #13ADC7, #6978D1, #945DD6)"
            borderRadius="28px"
            _hover={{ filter: "brightness(1.15)" }}
            onClick={() => window.open(link, "_blank")}
          >
            Ver código
          </Button>
        ) : status === "development" ? (
          <Button
            leftIcon={<Hammer size={14} />}
            fontSize="0.8rem"
            variant="outline"
            borderColor="whiteAlpha.300"
            color="whiteAlpha.600"
            borderRadius="28px"
            isDisabled
            _disabled={{ opacity: 1, cursor: "default" }}
          >
            Em desenvolvimento
          </Button>
        ) : (
          <Button
            leftIcon={<Lock size={14} />}
            fontSize="0.8rem"
            variant="outline"
            borderColor="whiteAlpha.300"
            color="whiteAlpha.600"
            borderRadius="28px"
            isDisabled
            _disabled={{ opacity: 1, cursor: "default" }}
          >
            Projeto privado
          </Button>
        )}
      </Flex>
    </Flex>
  );
}
