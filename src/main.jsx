import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PostForm from './App.jsx';
import UpdateButton from './button.jsx';
import UserList from './useAction.jsx';
import InputText from './input.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PostForm /> */}
    {/* <UpdateButton /> */}
    {/* <UserList /> */}
    <InputText />
  </StrictMode>,
)
