import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Victor Hugo</Text>
          <Text color="gray.300" fontSize="small">
            victor47n@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Victor Hugo" src="https://github.com/victor47n.png" />
    </Flex>
  );
}