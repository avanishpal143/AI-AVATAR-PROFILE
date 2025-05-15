import { useState, useEffect } from 'react';
import { Avatar } from '../types';
import { fetchAvatars } from '../services/api';

const useAvatars = () => {
  const [avatars, setAvatars] = useState<Avatar[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getAvatars = async () => {
      try {
        setIsLoading(true);
        const data = await fetchAvatars();
        setAvatars(data);
        setError(null);
      } catch (err) {
        setError('Failed to load avatars. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    getAvatars();
  }, []);

  const addAvatar = (name: string, image: string) => {
    const newAvatar: Avatar = {
      id: Date.now(), // Use timestamp as temporary ID
      name,
      image
    };
    setAvatars(prev => [...prev, newAvatar]);
  };

  const updateAvatar = (id: number, name: string, image: string) => {
    setAvatars(prev => 
      prev.map(avatar => 
        avatar.id === id ? { ...avatar, name, image } : avatar
      )
    );
  };

  const deleteAvatar = (id: number) => {
    setAvatars(prev => prev.filter(avatar => avatar.id !== id));
  };

  return {
    avatars,
    isLoading,
    error,
    addAvatar,
    updateAvatar,
    deleteAvatar
  };
};

export default useAvatars;