import { useState, useEffect } from 'react';
import { User } from '../types';
import { fetchUserData } from '../services/api';

const useUser = () => {
  const [user, setUser] = useState<User | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      try {
        setIsLoading(true);
        const userData = await fetchUserData();
        setUser(userData);
        setError(null);
      } catch (err) {
        setError('Failed to load user data. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getUser();
  }, []);

  return { user, isLoading, error };
};

export default useUser;