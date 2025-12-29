//import React, { useState } from 'react';
import { useActionState } from "react";

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

function PostForm() {
  
   const [{ success, error }, formAction, isPending] = useActionState(submitForm, {success:null, error:null});

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <form action={formAction}>
        <input 
          placeholder="Title" 
          name = "Title" 
          required 
        />
        <textarea 
          placeholder="Body" 
          name="Body"
          required 
        />
        
        <button type="submit" disabled={isPending}>
          {isPending ? 'Submitting...' : 'Post Content'}
        </button>
      </form>

      {/* Conditional Feedback UI */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {success && <p style={{ color: 'green' }}>Post created successfully!</p>}
    </div>
  );
};

export default PostForm;