"use client"
// components/DocumentUpload.tsx

import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";


const DocumentUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    const formData = new FormData();
    formData.append("file", file);

    try {
      setUploading(true);
      await axios.post("/api/v1/documents/create", formData, {
        withCredentials: true,
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Uploaded successfully!");
    } catch (err) {
      console.error(err);
      alert("Upload failed!");
    } finally {
      setUploading(false);
    }
  };

  return (
     <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* Motivational Text with animation */}
      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="mb-8 text-center text-2xl font-semibold text-gray-700 max-w-md"
      >
        Upload your documents easily and let AI handle the rest!
      </motion.h2>

      {/* Animated Upload Box */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="p-6 border rounded-lg shadow-md bg-white w-80"
      >
        <input
          type="file"
          
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-sm text-gray-700 file:mr-4 file:py-2 file:px-4 file:border file:border-pink-200 file:rounded file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
        />
        <button
          className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
          onClick={handleUpload}
          disabled={!file || uploading}
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </motion.div>
    </div>
  );
};

export default DocumentUpload;
