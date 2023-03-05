'use client';
import ChunkList from '@/features/split-sentence/chunk-list';
import { useSplitSentence } from '@/features/split-sentence/hooks/useSplitSentence';
import SplitSentenceForm from '@/features/split-sentence/split-sentence-form';
import { Box, Container, Flex, Heading } from '@chakra-ui/react';
import React from 'react';

const SplitSentence = () => {
  const { chunks, handleSplitSentence, handleClearChunks } = useSplitSentence();
  return (
    <Container maxW="container.xl">
      <Heading as="h1" size="xl" mb="2rem">
        Line Breaker
      </Heading>
      <Flex direction="column" width="100%">
        <Box mb="2rem">
          <SplitSentenceForm
            onSubmit={handleSplitSentence}
            onReset={handleClearChunks}
          />
        </Box>
        <Box>
          <ChunkList chunks={chunks} />
        </Box>
      </Flex>
    </Container>
  );
};

export default SplitSentence;
