import { useState, useRef, useEffect } from 'react';

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

  const initialValuesRef = useRef<Record<string, string>>(initialValues);

  useEffect(() => {
    const hasChanged = Object.keys(initialValues).some(
      (key) => initialValues[key] !== initialValuesRef.current?.[key]
    );

    if (hasChanged) {
      const newInitialValues: Record<string, string> = {};
      const newChangeMap: Record<string, boolean> = {};

      for (const key of Object.keys(initialValues)) {
        newInitialValues[key] = initialValues[key];
      }

      initialValuesRef.current = newInitialValues;

      for (const key of Object.keys(initialValues)) {
        newChangeMap[key] = false;
      }

      changeMapRef.current = newChangeMap;
      setEnableSave(false);
    }
  }, [initialValues]);

  const updateEnableSaveStatus = () => {
    const shouldEnable = Object.values(changeMapRef.current).some(Boolean);

    setEnableSave(shouldEnable);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    const isChanged = value !== initialValues[name];
    changeMapRef.current[name] = isChanged;

    updateEnableSaveStatus();
  };

  const markFieldAsChanged = (name: string) => {
    changeMapRef.current[name] = true;
    updateEnableSaveStatus();
  };

  return {
    enableSave,
    markFieldAsChanged,
    handleInputChange
  };
}
