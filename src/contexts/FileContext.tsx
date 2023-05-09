import React, {
  createContext, useCallback, useMemo, useState,
} from 'react';

type FileStorageContextType = {
  files: File[];
  workingFile: File | undefined;
  selectWorkingFile: (file: File) => void;
  openFile: () => void;
  newFile: () => void;
  saveFile: (fileText: String) => void;
};

const FileStorageContext = createContext<FileStorageContextType>({} as FileStorageContextType);

type FileStorageProviderProps = {
  children: React.ReactNode;
};

function FileStorageProvider({ children }: FileStorageProviderProps) {
  const [files, setFiles] = useState<File[]>([]);
  const [workingFile, setWorkingFile] = useState<File | undefined>(undefined);

  const openFile = useCallback(() => {
    // open file from device Storage
  }, []);

  const newFile = useCallback(() => {
    const file = new File([''], 'test.txt', { type: 'text/plain' });
    setFiles((prevFiles) => [...prevFiles, file]);
    setWorkingFile(file);
  }, []);

  const selectWorkingFile = useCallback((file: File) => {
    setWorkingFile(file);
  }, []);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const saveFile = useCallback((_fileText: String) => {
    // save fileText as a .tex file to device Storage
  }, []);

  const contextValues = useMemo(() => ({
    files,
    workingFile,
    selectWorkingFile,
    openFile,
    newFile,
    saveFile,
  }), [
    files,
    workingFile,
    selectWorkingFile,
    openFile,
    newFile,
    saveFile,
  ]);

  return (
    <FileStorageContext.Provider
      value={contextValues}
    >
      {children}
    </FileStorageContext.Provider>
  );
}

export default FileStorageContext;
export { FileStorageProvider };
