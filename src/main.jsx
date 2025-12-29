import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PostForm from './App.jsx';
import UpdateButton from './button.jsx';
import UserList from './useAction.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PostForm /> */}
    {/* <UpdateButton /> */}
    <UserList />
  </StrictMode>,
)
