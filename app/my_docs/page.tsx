"use client"
// components/DocumentList.tsx
import { useEffect, useState } from "react";
import { apiRequest } from "../lib/api";
import { useAuthStore } from "../store/useAuthStore";
import { motion } from "framer-motion";
import  saveAs from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { useDocStore } from "../store/useDocStore";
type myDocuments = {
  id: string;
  title: string;
  fileUrl: string;
};

const DocumentList = () => {
  const {allDocuments, setAllDocuments} = useDocStore()
//modal preview
  const [previewText, setPreviewText] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

useEffect(() => {
  const fetchDocs = async () => {
    try {
      const res = await apiRequest("/api/v1/doc/get", "GET");
 
      setAllDocuments(res.documents || []);  // ✅ fixed
    } catch (err) {
      console.error("Failed to fetch documents:", err);
      setAllDocuments([]); // fallback to empty
    }
  };
  fetchDocs();
}, [allDocuments, setAllDocuments]);

  const {user} = useAuthStore();
if (user && user && Array.isArray(allDocuments) && allDocuments.length === 0) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] bg-gray-100 rounded-lg shadow-inner p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl mb-3"
      >
        📂
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-lg font-medium text-gray-700"
      >
        No documents found.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-sm text-gray-500 mt-1"
      >
        Start by uploading a file to get started.
      </motion.p>
    </div>
  );
}
console.log(allDocuments)
  const handleDownloadDocx = async (extractedText: string) => {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [new TextRun(extractedText)],
          }),
        ],
      },
    ],
  });

  const blob = await Packer.toBlob(doc);
  saveAs(blob, "extracted-text.docx");
};


  const openModal = (text: string) => {
    setPreviewText(text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setPreviewText("");
  };


  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 py-4">
      {allDocuments?.map((doc,index) => (
        <div key={doc.id} className="border p-4 m-auto rounded bg-white shadow lg:w-[480px]  w-80 h-28 border-gray-200">
          <h4 className="font-semibold">{index+1}. {doc.fileName}</h4>
          <div className="mt-2 flex justify-end gap-3">
      <button
                onClick={() => openModal(doc.extracted)}
                className="mt-3 px-4 py-1 bg-gray-600 text-white rounded hover:bg-purple-700 transition"
              >
                Preview
              </button>
              {/* //modal */}
            <button
           onClick={() => handleDownloadDocx(doc.extracted)}
      className="mt-3 px-4 py-1 bg-blue-600 text-white rounded hover:bg-purple-700 transition"
    >
      Download as Word
            </button>
          </div>
               {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-2/3 lg:w-1/2 max-h-[80vh] overflow-y-auto">
            <h3 className="text-xl font-bold mb-4">Preview Extracted Text</h3>
            <p className="whitespace-pre-wrap">{previewText}</p>
            <button
              onClick={closeModal}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
