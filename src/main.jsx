import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import { ExplorerProvider } from './context/explorerContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ExplorerProvider>
      <App />
    </ExplorerProvider>
  </StrictMode>
);
