"use client";
import React from 'react';
import Link from 'next/link';
import { useAuth } from '../contexts/AuthContext';

const Sidebar: React.FC = () => {

    const {user, logout} = useAuth();

  return (
    <div className="h-full fixed top-0 left-0 w-64 bg-[#FEFFFE] text-[#797979] shadow-lg">
      <div className="p-5 border-b border-[#F4F4F4]">
        <h3 className="text-lg font-semibold text-black">{user?.fullName}</h3>
      </div>
      <ul className="mt-2">
        <li>
          <Link href="/dashboard">
            <p className="block p-4 hover:bg-[#F4F4F4]">Home</p>
          </Link>
        </li>
        <li>
          <Link href="/boards">
            <p className="block p-4 hover:bg-[#F4F4F4]">Boards</p>
          </Link>
        </li>
        <li>
          <Link href="/settings">
            <p className="block p-4 hover:bg-[#F4F4F4]">Settings</p>
          </Link>
        </li>
        <li>
          <Link href="/teams">
            <p className="block p-4 hover:bg-[#F4F4F4]">Teams</p>
          </Link>
        </li>
        <li>
          <Link href="/analytics">
            <p className="block p-4 hover:bg-[#F4F4F4]">Analytics</p>
          </Link>
        </li>
        <li>
          <button onClick={() => logout()} className="w-full text-left p-4 hover:bg-[#F4F4F4]">
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
