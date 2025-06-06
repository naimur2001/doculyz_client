import { create } from 'zustand';

type myDocuments ={
id: string;
fileName: string;
filePath: string;
fileUrl: string; 
extracted: string; 
}

type DocStore = {
  allDocuments: myDocuments[];
  setAllDocuments: (doc: myDocuments[]) => void;
};

export const useDocStore = create<DocStore>((set) => ({
  allDocuments: [],
  setAllDocuments: (doc) => set({ allDocuments: doc }),
}));