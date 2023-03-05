// create a react hooks to handle the SplitSentenceForm
import {
  Errors,
  useSplitSentenceFormValidation,
} from '@/features/split-sentence/hooks/useSplitSentenceFormValidation';
import { SubmitValues } from '@/features/split-sentence/split-sentence-form';
import { useState } from 'react';

export type FormValues = {
  splitCharacter?: string;
  chunkLength?: number;
  sentence?: string;
};

export type FormElements = {
  splitCharacter: HTMLInputElement;
  chunkLength: HTMLInputElement;
  sentence: HTMLTextAreaElement;
};

type Props = {
  defaultValues?: FormValues;
};

type UseSplitSentenceFormReturn = {
  form: FormValues;
  errors: Errors;
  handleSubmit: (
    onSubmit: (values: SubmitValues) => void
  ) => (event: React.FormEvent<HTMLFormElement>) => void;
  handleReset: (
    onReset: () => void
  ) => (event: React.FormEvent<HTMLFormElement>) => void;
  handleInputChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
};

export const useSplitSentenceForm = (
  { defaultValues }: Props = { defaultValues: {} }
): UseSplitSentenceFormReturn => {
  const {
    splitCharacter = '.',
    chunkLength = 2000,
    sentence = '',
  } = defaultValues ?? {};

  const { validateForm } = useSplitSentenceFormValidation();

  const [form, setForm] = useState({
    sentence,
    chunkLength,
    splitCharacter,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    console.log('handleInputChange', name, value);
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (onSubmit: (values: SubmitValues) => void) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const result = validateForm(
        (event.target as HTMLFormElement).elements as unknown as FormElements
      );
      if (!result.isValid) {
        setErrors({ ...result.errors });
        return;
      }
      console.log('submitting', form);
      setErrors({});

      onSubmit({
        chunkLength: Number(form.chunkLength),
        splitCharacter: form.splitCharacter,
        sentence: form.sentence,
      });
    };
  };

  const handleReset = (onReset: () => void) => {
    return (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setForm({
        ...form,
        sentence: '',
      });
      setErrors({});

      onReset();
    };
  };

  return {
    form,
    errors,
    handleSubmit,
    handleReset,
    handleInputChange,
  };
};
