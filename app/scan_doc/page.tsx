"use client"
// components/DocumentUpload.tsx

import {  useState } from "react";
import { motion } from "framer-motion";
import { apiRequest } from "../lib/api";
import Image from "next/image";
import  saveAs from "file-saver";
import { Document, Packer, Paragraph, TextRun } from "docx";
import { useRouter } from "next/navigation";
import { useAuthStore } from "../store/useAuthStore";
import { showErrorAlert, showSuccessAlert } from "../lib/alert";
const DocumentUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [extractedText, setExtractedText] = useState<string>("");

 const router = useRouter(); 
 const {user}=useAuthStore()

const handleUpload = async () => {
  if (!file) return;
  const formData = new FormData();
  formData.append("file", file);

  try {
    setUploading(true);
   const res= await apiRequest("/api/v1/doc/upload", "POST", formData, {
      "Content-Type": "multipart/form-data",
    });
     if (res?.document?.extracted) {
        setExtractedText(res.document.extracted);
        console.log(res.document.extracted);
      } else {
        setExtractedText("No extracted text found.");
      }
    // alert("Uploaded successfully!");
    await showSuccessAlert("Uploaded successfully!");

      
    } catch (err:any) {
      console.error(err);
      if (err.message==="Unauthorized: No token provided") {
        
        // alert("please signin first");
await showErrorAlert("please signin first");

      router.push('/signin')
      return
      }
      alert("Upload failed!");
      setExtractedText("");
    } finally { 
      setUploading(false);
    }
  };

    // Get file type from mime
  const isImage = file?.type.startsWith("image/");
  const isPDF = file?.type === "application/pdf";

//download word
  const handleDownloadDocx = async () => {
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


  return (
    <div className="min-h-screen bg-gray-50 flex flex-col md:flex-row items-start justify-center px-6 py-12 gap-12 max-w-7xl mx-auto">
      
      {/* Upload section */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 p-6 border rounded-lg shadow-md bg-white"
      >
        <h2 className="mb-6 text-2xl font-semibold text-gray-700">
          Upload your documents
        </h2>
        {!user && <p className="mb-4 text-gray-600">Please login to upload your documents.</p>}
   <input
          type="file"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="block w-full text-gray-700 file:mr-4 file:py-2 file:px-4 file:border file:border-pink-200 file:rounded file:text-sm file:bg-gray-100 hover:file:bg-gray-200"
          accept="image/*,application/pdf"
        />

      {file && (
        <div className="preview-box mt-4">
          {isImage && (
            <Image
            className="w-24 h-24 object-cover rounded"
              src={URL.createObjectURL(file)}
              alt="Preview"
              width={96}
        height={96}
            />
          )}

          {isPDF && (
            <iframe
              src={URL.createObjectURL(file)}
              title="PDF Preview"
              width="96"
              height="96"
              style={{ border: "1px solid #ccc" }}
            />
          )}

          {!isImage && !isPDF && (
            <p>Preview not available for this file type.</p>
          )}
          <p>Size: {(file.size / 1024).toFixed(2)} KB</p>
        </div>
      )}

        <button
          onClick={handleUpload}
          disabled={!file || uploading || !!extractedText}
          className='mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition disabled:opacity-5 disabled:cursor-not-allowed'
        >
          {uploading ? "Uploading..." : "Upload"}
        </button>
      </motion.div>

      {/* Result section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="w-full md:w-1/2 p-6 border rounded-lg shadow-md bg-white overflow-y-auto max-h-[70vh]"
      >
        <h2 className="mb-6 text-2xl font-semibold text-gray-700">
          Extracted Text
        </h2>
        <div className="whitespace-pre-wrap text-gray-800 text-sm leading-relaxed min-h-[150px]">
          {extractedText || "Upload a document to see the extracted text here."}
        </div>
         <button
      onClick={handleDownloadDocx}
      className="mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-purple-700 transition"
    >
      Download as Word
    </button>
      </motion.div>
    </div>
  );
};

export default DocumentUpload;