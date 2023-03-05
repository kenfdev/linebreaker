'use client';
import { SubmitValues } from '@/app/features/split-sentence/split-sentence-form';
import { useState } from 'react';

export const useSplitSentence = () => {
  const [chunks, setChunks] = useState<string[]>([]);

  const handleSplitSentence = (values: SubmitValues) => {
    const { sentence, chunkLength, splitCharacter } = values;
    const chunks = splitSentence({
      sentence,
      chunkLength,
      splitCharacter,
    });
    setChunks(chunks);
  };

  const handleClearChunks = () => {
    setChunks([]);
  };

  return {
    chunks,
    handleSplitSentence,
    handleClearChunks,
  };
};

type SplitSentenceProps = {
  sentence: string;
  chunkLength: number;
  splitCharacter: string;
};

function splitSentence({
  sentence,
  chunkLength,
  splitCharacter,
}: SplitSentenceProps): string[] {
  const chunks: string[] = [];
  const maxLength = chunkLength;

  while (sentence.length > maxLength) {
    let lastPeriodIndex = sentence.lastIndexOf(splitCharacter, maxLength - 1);
    if (lastPeriodIndex === -1) {
      // If there is no period before the maxLength, split at maxLength
      chunks.push(sentence.slice(0, maxLength) + splitCharacter);
      sentence = sentence.slice(maxLength);
    } else {
      // If there is a period before the maxLength, split at the period
      chunks.push(sentence.slice(0, lastPeriodIndex + 1));
      sentence = sentence.slice(lastPeriodIndex + 1);
    }
  }

  chunks.push(sentence); // Add the remaining part of the sentence
  return chunks;
}
