import { FormElements } from '@/features/split-sentence/hooks/useSplitSentenceForm';

export type Errors = {
  splitCharacter?: string;
  chunkLength?: string;
  sentence?: string;
};

export const useSplitSentenceFormValidation = () => {
  const validateForm = (values: FormElements) => {
    const errors: Errors = {};

    if (!values.splitCharacter.value) {
      errors.splitCharacter = 'Split character is required';
    }
    if (values.splitCharacter.value.length !== 1) {
      errors.splitCharacter = 'Split character must be 1 character';
    }

    if (!values.chunkLength.value) {
      errors.chunkLength = 'Chunk length is required';
    }
    const chunkLength = Number(values.chunkLength.value);
    if (isNaN(chunkLength)) {
      errors.chunkLength = 'Chunk length must be a number';
    }
    if (chunkLength < 1) {
      errors.chunkLength = 'Chunk length must be greater than 0';
    }

    if (!values.sentence.value) {
      errors.sentence = 'Sentence is required';
    }

    return {
      isValid:
        !!values.splitCharacter.value &&
        !!values.chunkLength.value &&
        !!values.sentence.value,
      errors,
    };
  };

  return {
    validateForm,
  };
};
