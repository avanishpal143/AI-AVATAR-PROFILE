import { User, Avatar } from '../types';

// Fetch user data from DummyJSON API
export const fetchUserData = async (): Promise<User> => {
  try {
    const response = await fetch('/api/users/1');
    if (!response.ok) throw new Error('Failed to fetch user data');
    
    const userData = await response.json();
    return {
      id: userData.id,
      firstName: userData.firstName,
      lastName: userData.lastName,
      image: userData.image
    };
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};

// Fetch avatars from DummyJSON API
export const fetchAvatars = async (): Promise<Avatar[]> => {
  try {
    const response = await fetch('/api/users?limit=3');
    if (!response.ok) throw new Error('Failed to fetch avatars');
    
    const data = await response.json();
    
    // Transform the response to match our Avatar type
    return data.users.map((user: any) => ({
      id: user.id,
      name: `${user.firstName} ${user.lastName}`,
      image: user.image
    }));
  } catch (error) {
    console.error('Error fetching avatars:', error);
    throw error;
  }
};