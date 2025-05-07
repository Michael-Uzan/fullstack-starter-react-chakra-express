import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

type ContentWrapperProps = { children: ReactNode };

export const ContentWrapper = ({ children }: ContentWrapperProps) => {
  return (
    <Box minHeight="740px" w="100%" h="100%" p="15px">
      {children}
    </Box>
  );
};
