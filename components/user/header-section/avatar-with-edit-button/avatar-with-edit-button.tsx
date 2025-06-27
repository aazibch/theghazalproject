'use client';

import { useEffect, useRef, useActionState } from 'react';
import { Avatar, Button } from 'flowbite-react';
import { FiEdit } from 'react-icons/fi';
import { updateProfilePicture } from '@/lib/actions';
import { useSession } from 'next-auth/react';
import LoadingOverlayAndEditButton from './loading-overlay-and-edit-button';

export default function AvatarWithEditButton({
  avatarSrc,
  resetFormHandler
}: {
  avatarSrc: string;
  resetFormHandler: () => void;
}) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const resetInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction] = useActionState(updateProfilePicture, null);

  const handleEditButtonClick = () => {
    imageInputRef.current!.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      formRef.current!.requestSubmit();
    }
  };

  return (
    <form
      action={formAction}
      ref={formRef}
      className="relative group mx-auto h-36 w-36 mb-4"
    >
      <LoadingOverlayAndEditButton
        handleEditButtonClick={handleEditButtonClick}
      />
      <Button
        className="absolute top-0 right-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        pill
        color="light"
        onClick={handleEditButtonClick}
      >
        <FiEdit />
      </Button>
      <Avatar className="mb-4" img={avatarSrc} rounded size="xl" />

      <input
        className="hidden"
        name="newImage"
        type="file"
        accept="image/png, image/jpeg"
        ref={imageInputRef}
        onChange={handleImageChange}
      />
      <input
        ref={resetInputRef}
        className="hidden"
        type="reset"
        onClick={resetFormHandler}
      />
    </form>
  );
}
