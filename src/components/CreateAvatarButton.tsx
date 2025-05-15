import React from 'react';
import { Plus } from 'lucide-react';

interface CreateAvatarButtonProps {
  onClick: () => void;
}

const CreateAvatarButton: React.FC<CreateAvatarButtonProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-transform duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label="Create new avatar"
    >
      <Plus size={24} />
    </button>
  );
};

export default CreateAvatarButton;