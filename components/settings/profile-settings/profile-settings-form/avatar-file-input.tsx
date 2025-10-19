import { Avatar, FileInput } from 'flowbite-react';

import { DEFAULT_PROFILE_PICTURE } from '@/constants';

export default function AvatarFileInput({
  avatarInputRef,
  userProfilePicture,
  avatarPreview,
  setIsProfilePictureRemovedHandler,
  setAvatarPreviewHandler,
  handleFileInputChange
}: {
  avatarInputRef: React.RefObject<HTMLInputElement>;
  userProfilePicture: string;
  avatarPreview: string;
  setIsProfilePictureRemovedHandler: (value: boolean) => void;
  setAvatarPreviewHandler: (value: string) => void;
  handleFileInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  const handleRemoveButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setIsProfilePictureRemovedHandler(true);
    setAvatarPreviewHandler(DEFAULT_PROFILE_PICTURE);
  };

  return (
    <div className="flex">
      <div className="shrink-0 flex flex-col mr-4">
        <Avatar img={avatarPreview} rounded size="lg" className="mb-2" />

        {avatarPreview === userProfilePicture &&
          userProfilePicture !== DEFAULT_PROFILE_PICTURE && (
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
          name="avatar"
          id="file-upload"
          ref={avatarInputRef}
          onChange={handleFileInputChange}
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
