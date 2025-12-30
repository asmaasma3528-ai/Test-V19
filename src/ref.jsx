import { useRef, forwardRef } from "react";

const RefInput = forwardRef((props, ref) => {
    return (
        <input
          ref = {ref} 
          type="text"
          className = "form-control mb-5 mt-5"
          placeholder="Type something here..."
        />
    )
});

export default function ParentComponent(){
    const inputRef = useRef(null);
    
   const focusInput = () => {
    if(inputRef.current){
        inputRef.current.focus();
    }
   }

    return (
        <div>
            <RefInput ref = {inputRef}/>
            <button onClick = {focusInput}>Focus button</button>
        </div>
    )
}