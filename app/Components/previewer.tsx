// components/Previewer.tsx
import Image from 'next/image';
import { Document, Page } from 'react-pdf'; // npm i react-pdf
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

type Props = { url: string };

const Previewer = ({ url }: Props) => {
  const isPDF = url.endsWith(".pdf");
  const isImage = /\.(jpg|jpeg|png|gif)$/i.test(url);

  if (isPDF) {
    return (
      <div className="mt-4">
        <Document file={url}>
          <Page pageNumber={1} />
        </Document>
      </div>
    );
  }

  if (isImage) {
    return <Image src={url} alt="Document Preview" className="mt-4 max-w-full h-auto rounded" />;
  }

  return <p className="mt-4 text-gray-500">Unsupported file type for preview.</p>;
};

export default Previewer;