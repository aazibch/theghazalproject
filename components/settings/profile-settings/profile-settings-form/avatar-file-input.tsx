import { useEffect, useState } from 'react';
import { Avatar, FileInput } from 'flowbite-react';

import { DEFAULT_PROFILE_PICTURE } from '@/constants';

export default function AvatarFileInput({
  avatarInputRef,
  userProfilePicture,
  setIsProfilePictureRemovedHandler
}: {
  avatarInputRef: React.RefObject<HTMLInputElement>;
  userProfilePicture: string;
  setIsProfilePictureRemovedHandler: (value: boolean) => void;
}) {
  const [avatarPreview, setAvatarPreview] = useState<string>(
    DEFAULT_PROFILE_PICTURE
  );

  useEffect(() => {
    if (userProfilePicture) {
      setAvatarPreview(userProfilePicture);
    }
  }, [userProfilePicture]);

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const profilePicture = e.target.files?.[0];

    if (profilePicture) {
      setIsProfilePictureRemovedHandler(false);

      const reader = new FileReader();

      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (
          e.target &&
          e.target.result &&
          typeof e.target.result === 'string'
        ) {
          const imageUrl: string = e.target.result;

          // Create an Image element to get image dimensions
          const img = new Image();
          img.onload = () => {
            // save to state.
            setAvatarPreview(imageUrl);
          };

          img.src = imageUrl;
        }
      };

      reader.readAsDataURL(profilePicture);
    }
  };

  const handleRemoveButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsProfilePictureRemovedHandler(true);
    setAvatarPreview(DEFAULT_PROFILE_PICTURE);
  };

  return (
    <div className="flex">
      <div className="shrink-0 flex flex-col mr-4">
        <Avatar img={avatarPreview} rounded size="lg" className="mb-2" />
        {avatarPreview === userProfilePicture && (
          <button
            onClick={handleRemoveButtonClick}
            className="mx-auto text-xs font-semibold text-gray-600 hover:text-gray-500"
          >
            Remove
          </button>
        )}
      </div>

      <div className="flex basis-full items-center">
        <FileInput
          id="file-upload"
          ref={avatarInputRef}
          onChange={fileInputChangeHandler}
          theme={{
            root: {
              base: 'w-full'
            }
          }}
        />
      </div>
    </div>
  );
}
