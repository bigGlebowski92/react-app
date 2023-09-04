import { useContext } from 'react';
import { InputContext } from './InputContext';

export const useInputContext = () => {
  const context = useContext(InputContext);
  if (context === null) {
    throw new Error(
      'useInputContext must be used within an useInputContextProvider'
    );
  }
  return context;
};
