import React, { useState } from 'react';
import Header from './components/Header';
import AvatarGrid from './components/AvatarGrid';
import CreateAvatarButton from './components/CreateAvatarButton';
import Modal from './components/Modal';
import CreateAvatarForm from './components/CreateAvatarForm';
import EditAvatarForm from './components/EditAvatarForm';
import useAvatars from './hooks/useAvatars';
import useUser from './hooks/useUser';
import { Avatar } from './types';

function App() {
  const { user, isLoading: isUserLoading } = useUser();
  const { 
    avatars, 
    isLoading: isAvatarsLoading, 
    error,
    addAvatar,
    updateAvatar,
    deleteAvatar
  } = useAvatars();

  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [currentAvatar, setCurrentAvatar] = useState<Avatar | null>(null);

  const handleCreateAvatar = (name: string, imageUrl: string) => {
    addAvatar(name, imageUrl);
    setIsCreateModalOpen(false);
  };

  const handleEditAvatar = (avatar: Avatar) => {
    setCurrentAvatar(avatar);
    setIsEditModalOpen(true);
  };

  const handleUpdateAvatar = (id: number, name: string, imageUrl: string) => {
    updateAvatar(id, name, imageUrl);
    setIsEditModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <Header user={user} isLoading={isUserLoading} />
        
        {error ? (
          <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded-md">
            <p className="text-red-700">{error}</p>
          </div>
        ) : (
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Your Avatars</h2>
            </div>
            <AvatarGrid 
              avatars={avatars} 
              isLoading={isAvatarsLoading} 
              onEdit={handleEditAvatar}
              onDelete={deleteAvatar}
            />
          </div>
        )}
        
        <CreateAvatarButton onClick={() => setIsCreateModalOpen(true)} />
        
        {/* Create Avatar Modal */}
        <Modal 
          isOpen={isCreateModalOpen} 
          onClose={() => setIsCreateModalOpen(false)}
          title="Create New Avatar"
        >
          <CreateAvatarForm 
            onSubmit={handleCreateAvatar}
            onCancel={() => setIsCreateModalOpen(false)}
          />
        </Modal>
        
        {/* Edit Avatar Modal */}
        {currentAvatar && (
          <Modal 
            isOpen={isEditModalOpen} 
            onClose={() => setIsEditModalOpen(false)}
            title="Edit Avatar"
          >
            <EditAvatarForm 
              avatar={currentAvatar}
              onSubmit={handleUpdateAvatar}
              onCancel={() => setIsEditModalOpen(false)}
            />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;