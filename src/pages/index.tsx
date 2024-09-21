import { useState, useEffect } from "react";
import { Loader } from "@/components/core";
import { PublicLayout } from "@/layouts";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <PublicLayout>
      {loading ? (
        <div className="flex justify-center items-center w-full h-screen">
          <Loader />
        </div>
      ) : (
        <section className="flex justify-center items-center w-full h-screen">
          <div className="lg:text-4xl text-2xl break-words font-semibold text-blue-900">
            PAGE UNDER MAINTENANCE
          </div>
        </section>
      )}
    </PublicLayout>
  );
};

export default Home;
