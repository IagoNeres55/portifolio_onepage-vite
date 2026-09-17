import { Flex, Box, Icon, Text, VStack } from "@chakra-ui/react";
import { FaAws, FaDocker, FaGitAlt, FaNodeJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiJavascript,
  SiC,
  SiDotnet,
  SiFastapi,
  SiNestjs,
  SiAdonisjs,
  SiExpress,
  SiNextdotjs,
  SiAngular,
  SiVuedotjs,
  SiTailwindcss,
  SiChakraui,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiRedis,
  SiRedux,
  SiScrumalliance,
  SiSwagger,
} from "react-icons/si";
import {
  Smartphone,
  Database,
  Workflow,
  Layers,
  Bot,
  Sparkles,
  Cpu,
  Kanban,
  Code2,
  TestTube,
  Braces,
  Zap,
  BotMessageSquare,
  Network,
  TrendingUp,
  Gauge,
  Puzzle,
  Blocks,
  GitPullRequest,
} from "lucide-react";

const technologyCategories = [
  {
    category: "Linguagens",
    items: [
      { name: "Python", icon: FaPython, color: "#FFD43B" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
      { name: "SQL", icon: Database, color: "#8FD3E8" },
      { name: "C", icon: SiC, color: "#A8B9CC" },
      { name: "C# / .NET", icon: SiDotnet, color: "#8C52E1" },
    ],
  },
  {
    category: "Back-end",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#68A063" },
      { name: "FastAPI", icon: SiFastapi, color: "#05998b" },
      { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
      { name: "AdonisJS", icon: SiAdonisjs, color: "#5A45FF" },
      { name: "Express.js", icon: SiExpress, color: "#F4F4F4" },
    ],
  },
  {
    category: "Front-end & Mobile",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "React Native", icon: Smartphone, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#F4F4F4" },
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Vue.js", icon: SiVuedotjs, color: "#42B883" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
      { name: "Chakra UI", icon: SiChakraui, color: "#2FD3B7" },
      { name: "Redux", icon: SiRedux, color: "#764ABC" },
    ],
  },
  {
    category: "Banco de Dados",
    items: [
      { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
      { name: "MySQL", icon: SiMysql, color: "#F2C94C" },
      { name: "Oracle", icon: Database, color: "#F2622E" },
      { name: "MongoDB / NoSQL", icon: SiMongodb, color: "#47A248" },
      { name: "Redis", icon: SiRedis, color: "#DC382D" },
    ],
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Docker", icon: FaDocker, color: "#2496ED" },
      { name: "Git", icon: FaGitAlt, color: "#F1502F" },
      { name: "Pipelines CI/CD", icon: Workflow, color: "#8FD3E8" },
      { name: "Infraestrutura como Código", icon: Network, color: "#8FD3E8" },
      { name: "Balanceamento de Carga", icon: Layers, color: "#8FD3E8" },
      { name: "Escalabilidade Horizontal", icon: TrendingUp, color: "#8FD3E8" },
      { name: "Monitoramento & Observabilidade", icon: Gauge, color: "#8FD3E8" },
    ],
  },
  {
    category: "IA & Automação",
    items: [
      { name: "Integração de LLMs", icon: Bot, color: "#945DD6" },
      { name: "APIs de IA", icon: Sparkles, color: "#6978D1" },
      { name: "Servidores MCP", icon: Cpu, color: "#13ADC7" },
      { name: "Engenharia de Prompt", icon: Braces, color: "#945DD6" },
      { name: "Automação de Processos", icon: Zap, color: "#6978D1" },
      { name: "Agentes de IA", icon: BotMessageSquare, color: "#13ADC7" },
    ],
  },
  {
    category: "Metodologias",
    items: [
      { name: "Scrum", icon: SiScrumalliance, color: "#009FDA" },
      { name: "Kanban", icon: Kanban, color: "#8FD3E8" },
      { name: "Clean Code", icon: Code2, color: "#8FD3E8" },
      { name: "Princípios SOLID", icon: Puzzle, color: "#8FD3E8" },
      { name: "Design Patterns", icon: Blocks, color: "#8FD3E8" },
      { name: "Testes Automatizados", icon: TestTube, color: "#8FD3E8" },
      { name: "Code Review", icon: GitPullRequest, color: "#8FD3E8" },
      { name: "Documentação (Swagger)", icon: SiSwagger, color: "#85EA2D" },
    ],
  },
];

export default function SectionTechnology() {
  return (
    <Flex
      id="Tecnologias"
      direction="column"
      align="center"
      w="full"
      mt={{ base: 14, md: 22 }}
      p={{ base: 4, md: 0 }}
      scrollMarginTop="90px"
    >
      <Text
        w={{ base: "100%", md: "75%" }}
        fontSize={{ base: "1.8rem", md: "2.6rem" }}
        fontFamily="heading"
        textTransform="uppercase"
        fontWeight="900"
        textAlign={{ base: "center", md: "start" }}
        mb={2}
      >
        Tecnologias
      </Text>
      <Text
        w={{ base: "100%", md: "75%" }}
        color="#5c5851"
        textAlign={{ base: "center", md: "start" }}
        mb={8}
        fontSize={{ base: ".9rem", md: "1rem" }}
      >
        Ferramentas e conceitos que utilizo no dia a dia, organizados por área.
      </Text>

      <VStack spacing={8} w={{ base: "100%", md: "75%" }} align="stretch">
        {technologyCategories.map((group) => {
          const isDatabase = group.category === "Banco de Dados";

          return (
          <Box
            key={group.category}
            border="1px solid"
            borderColor={isDatabase ? "#f6f3ed" : "#171717"}
            bg={isDatabase ? "#171717" : "#f6f3ed"}
            backdropFilter="blur(6px)"
            borderRadius="0"
            p={{ base: 4, md: 6 }}
          >
            <Text
              fontSize={{ base: "1rem", md: "1.15rem" }}
              fontWeight="600"
              mb={4}
              color={isDatabase ? "#ff5a1f" : "#ff5a1f"}
              textTransform="uppercase"
            >
              {group.category}
            </Text>
            <Flex wrap="wrap" gap={3}>
              {group.items.map((tech) => (
                <Flex
                  key={tech.name}
                  align="center"
                  gap={2}
                  border="1px solid"
                  borderColor={isDatabase ? "whiteAlpha.500" : "#171717"}
                  borderRadius="0"
                  px={3}
                  py={2}
                  transition="all 0.2s ease"
                  _hover={{
                    borderColor: "#ff5a1f",
                    bg: isDatabase ? "#2a2a28" : "#e8e2d8",
                  }}
                >
                  <Icon as={tech.icon} w={5} h={5} color={tech.color} />
                  <Text
                    fontSize=".85rem"
                    whiteSpace="nowrap"
                    color={isDatabase ? "#f6f3ed" : "#171717"}
                  >
                    {tech.name}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Box>
          );
        })}
      </VStack>
    </Flex>
  );
}
