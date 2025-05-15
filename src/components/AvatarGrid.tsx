import React from 'react';
import AvatarCard from './AvatarCard';
import { Avatar } from '../types';

interface AvatarGridProps {
  avatars: Avatar[];
  isLoading: boolean;
  onEdit: (avatar: Avatar) => void;
  onDelete: (id: number) => void;
}

const AvatarGrid: React.FC<AvatarGridProps> = ({ 
  avatars, 
  isLoading, 
  onEdit, 
  onDelete 
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {isLoading ? (
        Array(3).fill(0).map((_, index) => (
          <AvatarCard 
            key={`loading-${index}`}
            avatar={{ id: 0, name: '', image: '' }} 
            onEdit={() => {}} 
            onDelete={() => {}} 
            isLoading={true}
          />
        ))
      ) : (
        avatars.map(avatar => (
          <AvatarCard 
            key={avatar.id} 
            avatar={avatar} 
            onEdit={onEdit} 
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default AvatarGrid;