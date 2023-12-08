import { Box, Flex } from "@chakra-ui/react";
import Navbar from "./components/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}
const RootLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Flex flexDir={"column"}>
        <Navbar />
        <Box>{children}</Box>
      </Flex>
    </>
  );
};

export default RootLayout;
