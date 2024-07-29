"use client"
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (isAuthenticated) {
    router.push('/home');
    return null;
  }

  const handleLogin = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Perform login logic here
    try {
      const response = await fetch('http://localhost:3002/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
      if (response.ok) {
        login({  // Pass the received user details to the login function
          email: data.user.email,
          fullName: data.user.fullName,
          token: data.user.token
        });
        console.log('Login successful:', data);
        router.push('/home');  // Adjust as necessary to the correct route
      } else {
        throw new Error(data.message || 'Failed to login');
      }
    } catch (error) {
      alert('Login error: ' + error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-purple-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-xl font-bold text-center">Welcome to Workflo!</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Your email"
              aria-label="Your email"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded-md"
              placeholder="Password"
              aria-label="Password"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
            >
                <img src={showPassword ? "/hide.svg" : "/show.svg"} alt="Toggle Password Visibility" className="h-6 w-6" />
            </button>
          </div>
          <button
            type="submit"
            className="w-full p-3 text-white bg-purple-500 rounded-md hover:bg-purple-600"
          >
            Login
          </button>
          <p className="text-sm text-center">
            Don’t have an account? <a href="/signup" className="text-purple-500 hover:underline">Create a new account.</a>
          </p>
        </form>
      </div>
    </div>
  );
}
