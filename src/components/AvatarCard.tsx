import React from 'react';
import { Edit, Trash } from 'lucide-react';
import { Avatar } from '../types';

interface AvatarCardProps {
  avatar: Avatar;
  onEdit: (avatar: Avatar) => void;
  onDelete: (id: number) => void;
  isLoading?: boolean;
}

const AvatarCard: React.FC<AvatarCardProps> = ({ 
  avatar, 
  onEdit, 
  onDelete,
  isLoading = false 
}) => {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-[300px] flex flex-col animate-pulse">
        <div className="h-48 bg-gray-200"></div>
        <div className="p-4 flex-1 flex flex-col">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
          <div className="mt-auto flex justify-end space-x-2">
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
            <div className="h-8 w-8 bg-gray-200 rounded-full"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 h-[300px] flex flex-col">
      <div className="h-48 bg-gray-100 overflow-hidden">
        <img 
          src={avatar.image} 
          alt={avatar.name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h3 className="font-medium text-lg text-gray-800">{avatar.name}</h3>
        <div className="mt-auto flex justify-end space-x-2">
          <button 
            onClick={() => onEdit(avatar)}
            className="p-2 rounded-full bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors duration-200"
            aria-label={`Edit ${avatar.name}`}
          >
            <Edit size={16} />
          </button>
          <button 
            onClick={() => onDelete(avatar.id)}
            className="p-2 rounded-full bg-red-50 text-red-600 hover:bg-red-100 transition-colors duration-200"
            aria-label={`Delete ${avatar.name}`}
          >
            <Trash size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvatarCard;