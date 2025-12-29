import { use } from "react";

async function fetchUsers(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if(!response.ok){
        return "Users were not found!!";
    }

    return response.json();
}

const responsePromise = fetchUsers();

function GetTheUsers(){
    const users = use(responsePromise);
    return (
      <ul>
        { users.map((user) => (
            <li key = {user.id}>
              {user.title}
            </li>
        )) }
      </ul>
    )
};

export default function UserList(){
    return (
        <GetTheUsers />
    )
}