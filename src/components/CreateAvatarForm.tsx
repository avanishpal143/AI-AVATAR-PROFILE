import React, { useState } from 'react';

interface CreateAvatarFormProps {
  onSubmit: (name: string, imageUrl: string) => void;
  onCancel: () => void;
}

const CreateAvatarForm: React.FC<CreateAvatarFormProps> = ({ onSubmit, onCancel }) => {
  const [name, setName] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !imageUrl.trim()) return;
    
    setIsSubmitting(true);
    // Simulating API call with a slight delay
    setTimeout(() => {
      onSubmit(name, imageUrl);
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Avatar Name
        </label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter avatar name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      
      <div>
        <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
          Image URL
        </label>
        <input
          type="url"
          id="imageUrl"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
          placeholder="https://example.com/image.jpg"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
          required
        />
      </div>
      
      {imageUrl && (
        <div className="mt-2">
          <p className="text-sm text-gray-500 mb-1">Preview:</p>
          <div className="h-48 bg-gray-100 rounded-md overflow-hidden">
            <img 
              src={imageUrl} 
              alt="Preview" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/400x400?text=Invalid+Image+URL';
              }}
            />
          </div>
        </div>
      )}
      
      <div className="flex justify-end space-x-3 pt-4">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isSubmitting}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium text-white bg-blue-600 border border-transparent rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting || !name.trim() || !imageUrl.trim()}
        >
          {isSubmitting ? 'Creating...' : 'Create Avatar'}
        </button>
      </div>
    </form>
  );
};

export default CreateAvatarForm;