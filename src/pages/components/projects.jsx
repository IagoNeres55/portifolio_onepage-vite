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
      bg="#f6f3ed"
      border="1px solid"
      borderColor={featured ? "brand.400" : "bg.border"}
      backdropFilter="blur(6px)"
      borderRadius="0"
      w={{ base: "280px", md: "340px" }}
      gridColumn={featured ? { base: "auto", md: "span 2" } : "auto"}
      minH="480px"
      flexDirection="column"
      overflow="hidden"
      position="relative"
      transition="all 0.25s ease"
      boxShadow={featured ? "8px 8px 0 #ff5a1f" : "5px 5px 0 rgba(23,23,23,.12)"}
      _hover={{
        transform: "translateY(-5px)",
        borderColor: "#ff5a1f",
        boxShadow: "8px 8px 0 #ff5a1f",
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
          borderRadius="0"
          bg="#ff5a1f"
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
          bg="#171717"
          fontSize="2.2rem"
          fontWeight="700"
          color="whiteAlpha.500"
          fontFamily="mono"
        >
          {"</>"}
        </Flex>
      )}

      <Flex direction="column" flex="1" p={5} gap={3}>
        <Text fontSize="1.25rem" fontWeight="800" textTransform="uppercase" fontFamily="heading">
          {titulo}
        </Text>
        <Text fontSize=".9rem" color="#5c5851" flex="1">
          {texto}
        </Text>

        {tecnologias.length > 0 && (
          <Wrap>
            {tecnologias.map((tech) => (
              <WrapItem key={tech}>
                <Badge
                  px={2}
                  py={0.5}
                  borderRadius="0"
                  bg="#e8e2d8"
                  color="#171717"
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
            bg="#ff5a1f"
            borderRadius="0"
            _hover={{ bg: "#171717" }}
            onClick={() => window.open(link, "_blank")}
          >
            Ver código
          </Button>
        ) : status === "development" ? (
          <Button
            leftIcon={<Hammer size={14} />}
            fontSize="0.8rem"
            variant="outline"
            borderColor="#aaa49a"
            color="#5c5851"
            borderRadius="0"
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
            borderColor="#aaa49a"
            color="#5c5851"
            borderRadius="0"
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
