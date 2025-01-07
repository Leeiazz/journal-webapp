import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { JournalApp } from './JournalApp';
import { BrowserRouter } from 'react-router';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <JournalApp />
    </BrowserRouter>
  </StrictMode>
);
