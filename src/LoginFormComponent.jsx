import React, { useState } from 'react';
// Import your CSS file for styling: import './Login.css';

function LoginFormComponent() {
  // 1. Initialize state for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // 2. Handler for form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent default form refresh

    // Simple Client-Side Validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    setError(''); // Clear previous errors
    setIsLoading(true); // Start loading state

    // --- Start: Replace this section with your actual API call ---
    try {
      // Simulate an API call
      console.log('Attempting login with:', { email, password });
      await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate network delay

      // Simulate a successful login
      if (email === 'test@example.com' && password === 'password') {
        alert('Login Successful!');
        // In a real app, you would save the token and redirect:
        // localStorage.setItem('token', 'your_jwt_token');
        // navigate('/dashboard');
      } else {
        // Simulate a failed login (e.g., 401 Unauthorized)
        setError('Invalid email or password.');
      }
    } catch (apiError) {
      console.error('Login API Error:', apiError);
      setError('A network error occurred. Please try again.');
    } finally {
      setIsLoading(false); // End loading state
    }
    // --- End: API call section ---
  };

  return (
    <div className="login-container">
      <h2>User Login Page</h2>
      
      {/* Display error message if state.error is set */}
      {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
            disabled={isLoading}
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            disabled={isLoading}
          />
        </div>

        <button 
          type="submit" 
          disabled={isLoading}
        >
          {isLoading ? 'Logging in...' : 'Log In'}
        </button>
      </form>
    </div>
  );
}

export default LoginFormComponent;
