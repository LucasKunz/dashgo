import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}
export default function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Lucas Kunz</Text>
          <Text color="gray.300" fontSize="small">
            lucaskunz1@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Lucas Kunz"
        src="https://github.com/lucaskunz.png"
      />
    </Flex>
  );
}
