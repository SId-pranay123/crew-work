"use client";
import { useAuth } from '../contexts/AuthContext';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  if (!isAuthenticated) {
    router.push('/login');
    return null; // Optional: Show a loading spinner or message while redirecting
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Welcome to Your Home Page!</h1>
      {/* Add your home page content here */}
    </div>
  );
}
