/* eslint-disable react-refresh/only-export-components */
import { createContext, useState, useContext } from 'react';
import { explorerData } from '../constants/explorerData';

export const ExplorerContext = createContext();

export const useExplorer = () => useContext(ExplorerContext);

export const ExplorerProvider = ({ children }) => {
  const [fileData, setFileData] = useState(explorerData);

  return (
    <ExplorerContext.Provider value={{ fileData, setFileData }}>
      {children}
    </ExplorerContext.Provider>
  );
};
