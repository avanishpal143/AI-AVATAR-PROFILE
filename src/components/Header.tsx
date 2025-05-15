import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user?: User;
  isLoading: boolean;
}

const Header: React.FC<HeaderProps> = ({ user, isLoading }) => {
  const userName = user ? `${user.firstName} ${user.lastName}` : 'Guest';
  
  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 px-4 sm:px-6 lg:px-8 rounded-lg shadow-md mb-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">AI Avatar Dashboard</h1>
        {isLoading ? (
          <div className="h-6 bg-blue-400/30 rounded animate-pulse w-48"></div>
        ) : (
          <p className="text-xl">
            Welcome back, <span className="font-semibold">{userName}</span>
          </p>
        )}
      </div>
    </header>
  );
};

export default Header;