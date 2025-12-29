//import React, { useState } from 'react';
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

async function submitForm(prevState, formData){
  const title = formData.get("Title");
  const body = formData.get("Body");

  try{
   const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-type': 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to submit data');

      const data = await response.json();

      return { success:`The data was successfully submited on ${data.id}`, error:null };
  }catch(err){
    return {error:err.message}
  }
}

function SubmitBtn(){
  const { pending } = useFormStatus();
  return (  
        <button 
        
        style = {{
          padding:"0.4rem",
          backgroundColor:"lightcoral",
          fontWeight:"bolder",
          borderRadius:"5px"
        }}

        type="submit" disabled={pending}>
          {pending ? 'Submitting...' : 'Post Content'}
        </button>
  );
}

// function DeleteBtn(){
//   const { pending } = useFormStatus();
//   return (  
//         <button 
        
//         style = {{
//           padding:"0.4rem",
//           backgroundColor:"red",
//           fontWeight:"bolder",
//           borderRadius:"5px"
//         }}

//         type="cancel" disabled={pending}>
//           {pending ? 'Deleting...' : 'Post deleted'}
//         </button>
//   );
// }

function PostForm() {
  
   const [{ success, error }, formAction, isPending] = useActionState(submitForm, {success:null, error:null});
   

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <form action={formAction}>
        <input 

         style = {{
          border:"2px solid black",
          fontSize:"1.4rem",
          color:"blue"
         }}

          placeholder="Title" 
          name = "Title" 
          required 
        />
        <textarea 

        style = {{
          border:"2px solid black",
          fontSize:"1.4rem",
          color:"coral",
          marginTop:"2rem"
         }}

          placeholder="Body" 
          name="Body"
          required 
        />
      
       <SubmitBtn />
       {/* <br />
       <DeleteBtn /> */}

      </form>

      {/* Conditional Feedback UI */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {success && <p style={{ color: 'green' }}>Post created successfully!</p>}
    </div>
  );
};

export default PostForm;