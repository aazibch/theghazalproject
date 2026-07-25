import AvatarEditor, { useAvatarEditor } from 'react-avatar-editor';
import {
  Button,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from 'flowbite-react';

export default function AvatarEditorModal({
  openAvatarEditorModal,
  avatarPreview,
  avatarInputRef,
  setOpenAvatarEditorModalHandler,
  setAvatarPreviewHandler
}: {
  openAvatarEditorModal: boolean;
  avatarPreview: string;
  avatarInputRef: React.RefObject<HTMLInputElement | null>;
  setOpenAvatarEditorModalHandler: (value: boolean) => void;
  setAvatarPreviewHandler: (value: string) => void;
}) {
  const editor = useAvatarEditor();

  const handleSave = () => {
    const canvas = editor.getImageScaledToCanvas();
    if (canvas) {
      const dataUrl = canvas.toDataURL();
      setAvatarPreviewHandler(dataUrl);

      // Convert to blob, then to file, and programmatically set it as the selected on avatar input
      const selectedPictureName =
        avatarInputRef.current!.files?.[0].name || 'new-avatar.jpg';
      const selectedPictureType =
        avatarInputRef.current!.files?.[0].type || 'image/jpeg';

      canvas.toBlob((blob) => {
        if (!blob) return;

        const file = new File([blob], selectedPictureName, {
          type: selectedPictureType
        });

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(file);
        avatarInputRef.current!.files = dataTransfer.files;
      }, selectedPictureType);
    }

    setOpenAvatarEditorModalHandler(false);
  };

  return (
    <Modal
      dismissible
      show={openAvatarEditorModal}
      onClose={() => setOpenAvatarEditorModalHandler(false)}
    >
      <ModalHeader>Avatar Editor</ModalHeader>
      <ModalBody className="text-base text-gray-500 space-y-4">
        <p>Drag to resize image.</p>
        <div className="flex justify-center">
          <AvatarEditor
            showGrid
            ref={editor.ref}
            image={avatarPreview}
            width={300}
            height={300}
            scale={1}
          />
        </div>
      </ModalBody>
      <ModalFooter>
        <Button onClick={handleSave}>Save</Button>
        <Button
          color="light"
          onClick={() => setOpenAvatarEditorModalHandler(false)}
        >
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
}
