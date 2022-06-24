import { useState } from 'react';

const useFormInput = (validateValue) => {
  const [value, setValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);

  const isValid = validateValue(value);
  const hasError = !isValid && isTouched;

  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setIsTouched(true);
  };

  const resetInput = () => {
    setValue('');
    setIsTouched(false);
  };

  return {
    value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useFormInput;
