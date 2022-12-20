import { Feedback } from "./Feedback";
import { Box } from "./Box";

export const App = () => {
  return (
    <Box
      bg="light"
      color="text"
      width="containerWidth"
      position="relative"
      p={6}
      my={0}
      mx="auto"
      boxShadow="containerShadow"
    >
      <Feedback/>
    </Box>
  );
};
