import { create } from 'zustand';

type Documents ={
id: string;
fileName: string;
filePath: string;
fileUrl: string; 
extracted: string; 
}

type DocStore = {
  allDocuments: Documents[];
  setAllDocuments: (doc: Documents[]) => void;
};

export const useDocStore = create<DocStore>((set) => ({
  allDocuments: [],
  setAllDocuments: (doc) => set({ allDocuments: doc }),
}));