import { useDeferredValue, useState } from "react";

export default function InputText(){
    const [ query, setQuery ] = useState("");

    return (
        <div>
            <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder = "Start typing here..."
            />
            <DeferredOutput value = {query} />
        </div>
    )
}

function DeferredOutput({ value }){
    const deferredValue = useDeferredValue(value, "Loading...");
    const result = Array(30000).fill(deferredValue);

    return (
        <ul>
            {result.map((type) => 
            <li key = {type.id}>
             {type}
            </li>
            )}
        </ul>
    )
}