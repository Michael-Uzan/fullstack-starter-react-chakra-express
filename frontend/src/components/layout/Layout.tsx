import { Box } from "@chakra-ui/react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ContentWrapper } from "./ContentWrapper";
import { Content } from "../Content";

export const Layout = () => {
  return (
    <Box h="100%" w="100%">
      <Header />
      <ContentWrapper>
        <Content />
      </ContentWrapper>
      <Footer />
    </Box>
  );
};
