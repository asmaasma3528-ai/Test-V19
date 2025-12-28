import React, { useState, useTransition } from 'react';

function PostForm() {
  // Form data state
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  // Status states
  const [isLoading, startTransition] = useTransition();
  const [error, setError] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //setIsLoading(true);
    setError(null);
    setIsSuccess(false);

    startTransition(async() => {

    try {
      // Simulating an API call
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({ title, body }),
        headers: { 'Content-type': 'application/json' },
      });

      if (!response.ok) throw new Error('Failed to submit data');

      setIsSuccess(true);
      setTitle(''); // Reset form on success
      setBody('');
    } catch (err) {
      setError(err.message);
    }
  })
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto' }}>
      <form onSubmit={handleSubmit}>
        <input 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
        <textarea 
          placeholder="Body" 
          value={body} 
          onChange={(e) => setBody(e.target.value)} 
          required 
        />
        
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Submitting...' : 'Post Content'}
        </button>
      </form>

      {/* Conditional Feedback UI */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {isSuccess && <p style={{ color: 'green' }}>Post created successfully!</p>}
    </div>
  );
}

export default PostForm;