import { CheckIcon } from '@chakra-ui/icons';
import { Box, Button, Text, useClipboard } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  chunk: string;
};

const ChunkItem: FC<Props> = ({ chunk }) => {
  const trimmedChunk = chunk.trim();
  const { onCopy, hasCopied } = useClipboard(trimmedChunk);

  return (
    <Box mb="1rem">
      <Box
        border="1px"
        borderColor="gray"
        px="1rem"
        pt="2rem"
        pb="1rem"
        borderRadius="8px"
        position="relative"
      >
        <Text
          fontSize="sm"
          color="gray"
          position="absolute"
          top="5px"
          left="5px"
        >
          {trimmedChunk.length} characters
        </Text>
        <Button
          leftIcon={hasCopied ? <CheckIcon /> : undefined}
          colorScheme="green"
          position="absolute"
          size="xs"
          top="5px"
          right="5px"
          onClick={onCopy}
        >
          {hasCopied ? 'Copied' : 'Copy'}
        </Button>
        <Text maxH="10rem" overflow="scroll">
          {trimmedChunk}
        </Text>
      </Box>
    </Box>
  );
};

export default ChunkItem;
