import "bootstrap/dist/css/bootstrap.min.css";

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import PostForm from './App.jsx';
import UpdateButton from './button.jsx';
import UserList from './useAction.jsx';
import InputText from './input.jsx';
import ParentComponent from './ref.jsx';
import App from "./context.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <PostForm /> */}
    {/* <UpdateButton /> */}
    {/* <UserList /> */}
    {/* <InputText /> */}
    {/* <ParentComponent /> */}
    <App />
  </StrictMode>,
)
