import { useState, useRef } from 'react';

export function useFormChangeTracker(initialValues: Record<string, any>) {
  const [enableSave, setEnableSave] = useState(false);

  // Using ref as it prevents the object from reinitializing when the component rerenders
  const changeMapRef = useRef<Record<string, boolean>>(
    Object.keys(initialValues).reduce(
      (acc, key) => {
        acc[key] = false;
        return acc;
      },
      {} as Record<string, boolean>
    )
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const isChanged = value !== initialValues[name];
    changeMapRef.current[name] = isChanged;

    const shouldEnable = Object.values(changeMapRef.current).some(Boolean);
    setEnableSave(shouldEnable);
  };

  return {
    enableSave,
    handleInputChange
  };
}
