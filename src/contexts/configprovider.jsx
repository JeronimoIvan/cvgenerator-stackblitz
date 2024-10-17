import { createContext, useContext, useState } from 'react';

const ConfigContext = createContext({
  maxHistorySize: 10,
  setMaxHistorySize: () => {},
  debounceDelayTime: 2000,
  setDebounceDelayTime: () => {},
  language: 'en',
});

const ConfigProvider = ({ children }) => {
  const [maxHistorySize, setMaxHistorySize] = useState(
    localStorage.getItem('maxHistorySize') || 10
  );
  const [debounceDelayTime, setDebounceDelayTime] = useState(
    localStorage.getItem('debounceDelayTime') || 2000
  );

  return (
    <ConfigContext.Provider
      value={{
        maxHistorySize,
        setMaxHistorySize,
        debounceDelayTime,
        setDebounceDelayTime,
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
};

export default ConfigProvider;

export const useConfigContext = () => useContext(ConfigContext);
