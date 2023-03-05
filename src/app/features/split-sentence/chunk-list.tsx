import ChunkItem from '@/app/features/split-sentence/chunk-item';
import { Box, Heading } from '@chakra-ui/react';
import React, { FC } from 'react';

type Props = {
  chunks: string[];
};

const ChunkList: FC<Props> = ({ chunks }) => {
  return (
    <Box display="flex" flexDirection="column" width="100%">
      <Heading as="h2" size="md" mb="1rem">
        Results ({chunks.length} chunks)
      </Heading>
      <Box display="flex" flexDirection="column">
        {chunks.map((chunk, index) => (
          <ChunkItem key={index} chunk={chunk} />
        ))}
      </Box>
    </Box>
  );
};

export default ChunkList;
