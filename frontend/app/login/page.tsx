"use client"
import { useAuth } from '../../contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function LoginPage() {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  if (isAuthenticated) {
    router.push('/');
    return null;
  }

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    login();
    router.push('/');
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
              className="w-full p-2 border rounded-md"
              placeholder="Your email"
              aria-label="Your email"
            />
          </div>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              required
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
