"use client";

import LoadingSkeleton from "../Components/loadingSkeleton";
import { useEffect, useState } from "react";

export default function Page() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="p-6">
      {loading ? (
        <LoadingSkeleton />
      ) : (
        <div>
          <h1 className="text-2xl font-semibold">Loaded Content</h1>
          <p>This is the actual content after loading.</p>
        </div>
      )}
    </div>
  );
}
