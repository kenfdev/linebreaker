import { useSplitSentenceForm } from '@/features/split-sentence/hooks/useSplitSentenceForm';
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  HStack,
  Input,
  Textarea,
} from '@chakra-ui/react';
import React, { FC } from 'react';

export type SubmitValues = {
  chunkLength: number;
  splitCharacter: string;
  sentence: string;
};

type Props = {
  onSubmit: (values: SubmitValues) => void;
  onReset: () => void;
};

const SplitSentenceForm: FC<Props> = ({ onSubmit, onReset }) => {
  const { form, errors, handleInputChange, handleSubmit, handleReset } =
    useSplitSentenceForm();

  return (
    <form
      style={{ width: '100%' }}
      onSubmit={handleSubmit(onSubmit)}
      onReset={handleReset(onReset)}
    >
      <FormControl mb="1rem" isInvalid={!!errors.chunkLength}>
        <FormLabel>Chunk Length</FormLabel>
        <Input
          name="chunkLength"
          value={form.chunkLength}
          onChange={handleInputChange}
        />
        <FormHelperText>Set the length of the chunk.</FormHelperText>
        {!!errors.chunkLength && (
          <FormErrorMessage>{errors.chunkLength}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mb="1rem" isInvalid={!!errors.splitCharacter}>
        <FormLabel>Split Character</FormLabel>
        <Input
          name="splitCharacter"
          value={form.splitCharacter}
          onChange={handleInputChange}
        />
        <FormHelperText>
          Set the character to split with. (e.g. '.')
        </FormHelperText>
        {!!errors.splitCharacter && (
          <FormErrorMessage>{errors.splitCharacter}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl mb="1rem" isInvalid={!!errors.sentence}>
        <FormLabel>Sentence</FormLabel>
        <Textarea
          name="sentence"
          placeholder="Put your content here..."
          onChange={handleInputChange}
          value={form.sentence}
        />
        {!!errors.sentence && (
          <FormErrorMessage>{errors.sentence}</FormErrorMessage>
        )}
      </FormControl>
      <HStack>
        <Button type="submit" colorScheme="blue">
          Split
        </Button>
        <Button type="reset" colorScheme="gray">
          Reset
        </Button>
      </HStack>
    </form>
  );
};

export default SplitSentenceForm;
