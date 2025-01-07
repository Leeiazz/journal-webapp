import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { JournalApp } from './JournalApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <JournalApp />
  </StrictMode>
);
