"use client"
// components/DocumentList.tsx
import { useEffect, useState } from "react";
import { apiRequest } from "../lib/api";
import { useAuthStore } from "../store/useAuthStore";
import { motion } from "framer-motion";

type Document = {
  id: string;
  title: string;
  fileUrl: string;
};

const DocumentList = () => {
  const [documents, setDocuments] = useState<Document[]>([]);

  useEffect(() => {
    const fetchDocs = async () => {
      const res = await apiRequest("/api/v1/doc/get", "GET");
      setDocuments(res.data);
    };
    fetchDocs();
  }, []);

  const {user} = useAuthStore();
if (user && documents.length === 0) {
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


  return (
    <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {documents?.map((doc) => (
        <div key={doc.id} className="border p-4 rounded bg-white shadow">
          <h4 className="font-semibold">{doc.title}</h4>
          <div className="mt-2 flex gap-3">
            <a
              href={doc.fileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
            >
              Preview
            </a>
            <a
              href={doc.fileUrl}
              download
              className="text-green-600 underline"
            >
              Download
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentList;
