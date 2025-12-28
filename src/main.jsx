import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PostForm from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PostForm />
  </StrictMode>,
)
