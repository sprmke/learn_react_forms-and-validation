import { useReducer } from 'react';

const initialInputState = {
  value: '',
  isTouched: false,
};
const inputStateReducer = (state, action) => {
  if (action.type === 'INPUT') {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === 'BLUR') {
    return { value: state.value, isTouched: true };
  }
  if (action.type === 'RESET') {
    return { value: '', isTouched: false };
  }
  return initialInputState;
};

const useFormInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );
  const isValid = validateValue(inputState.value);
  const hasError = !isValid && inputState.isTouched;

  const inputChangeHandler = (event) => {
    dispatch({
      type: 'INPUT',
      value: event.target.value,
    });
  };

  const inputBlurHandler = (event) => {
    dispatch({
      type: 'BLUR',
    });
  };

  const resetInput = () => {
    dispatch({
      type: 'RESET',
    });
  };

  return {
    value: inputState.value,
    isValid,
    hasError,
    inputChangeHandler,
    inputBlurHandler,
    resetInput,
  };
};

export default useFormInput;
