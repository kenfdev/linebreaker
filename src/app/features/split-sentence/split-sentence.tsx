'use client';
import { useSplitSentence } from '@/app/features/split-sentence/hooks/useSplitSentence';
import SplitSentenceForm from '@/app/features/split-sentence/split-sentence-form';
import React from 'react';

const SplitSentence = () => {
  const { chunks, handleSplitSentence } = useSplitSentence();
  return <SplitSentenceForm onSubmit={handleSplitSentence} />;
};

export default SplitSentence;
