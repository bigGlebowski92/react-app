import { createContext, useState } from 'react';

type InputContextProvider = {
  showInput: boolean;
  setShowInput: React.Dispatch<React.SetStateAction<boolean>>;
};

type InputProviderProps = {
  children: React.ReactNode;
};

export const InputContext = createContext<InputContextProvider | null>(null);

export const InputProvider = ({ children }: InputProviderProps) => {
  const [showInput, setShowInput] = useState(false);

  return (
    <InputContext.Provider value={{ showInput, setShowInput }}>
      {children}
    </InputContext.Provider>
  );
};
