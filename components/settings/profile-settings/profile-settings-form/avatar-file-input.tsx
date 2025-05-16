import { useEffect, useState } from 'react';
import { Avatar, FileInput } from 'flowbite-react';

export default function AvatarFileInput({
  img,
  avatarInputRef
}: {
  img: string;
  avatarInputRef: React.RefObject<HTMLInputElement>;
}) {
  const [profileImage, setProfileImage] = useState<string>();

  useEffect(() => {
    if (img) {
      setProfileImage(img);
    }
  }, [img]);

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const profileImage = e.target.files?.[0];

    if (profileImage) {
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
            setProfileImage(imageUrl);
          };

          img.src = imageUrl;
        }
      };

      reader.readAsDataURL(profileImage);
    }
  };

  const handleRemoveButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    avatarInputRef.current!.value = '';
  };

  return (
    <div className="flex">
      <div className="shrink-0 flex flex-col mr-4">
        <Avatar img={profileImage} rounded size="lg" className="mb-2" />
        <button
          onClick={handleRemoveButtonClick}
          className="mx-auto text-xs font-semibold text-gray-600 hover:text-gray-500"
        >
          Remove
        </button>
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
