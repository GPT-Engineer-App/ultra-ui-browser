import { Container, VStack, HStack, Box, Text, Button, IconButton, Input, Textarea, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { FaSun, FaMoon, FaCode, FaSave, FaTrash } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");

  const handleRunCode = () => {
    try {
      // eslint-disable-next-line no-eval
      const result = eval(code);
      setOutput(result);
    } catch (error) {
      setOutput(error.message);
    }
  };

  const handleClearCode = () => {
    setCode("");
    setOutput("");
  };

  const bgColor = useColorModeValue("gray.100", "gray.600");
  const textColor = useColorModeValue("black", "white");

  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" bg={bgColor} color={textColor}>
      <HStack width="100%" justifyContent="space-between" p={4}>
        <Text fontSize="2xl" fontWeight="bold">
          Ultra UI Code Editor
        </Text>
        <IconButton aria-label="Toggle Color Mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} />
      </HStack>
      <VStack spacing={4} width="100%">
        <Textarea value={code} onChange={(e) => setCode(e.target.value)} placeholder="Write your code here..." size="lg" height="200px" />
        <HStack spacing={4}>
          <Button leftIcon={<FaCode />} colorScheme="teal" onClick={handleRunCode}>
            Run Code
          </Button>
          <Button leftIcon={<FaSave />} colorScheme="blue">
            Save Code
          </Button>
          <Button leftIcon={<FaTrash />} colorScheme="red" onClick={handleClearCode}>
            Clear Code
          </Button>
        </HStack>
        <Box width="100%" p={4} bg={useColorModeValue("white", "gray.800")} borderRadius="md" boxShadow="md">
          <Text fontSize="lg" fontWeight="bold">
            Output:
          </Text>
          <Text>{output}</Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
