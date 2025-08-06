"use client";
import Hero from "@/components/home-components/hero/Hero";
import LatestNews from "@/components/home-components/latest-news/LatestNews";
import { api } from "@/utils/api";
import { useQuery } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

const Home = () => {

  const { data, isLoading } = useQuery({
    queryKey: ["content"],
    queryFn: () => api.get("/dashboard/get_content"),
  });

  const content = data?.data?.data || [];
  return (
    <div>
      {
        isLoading ? (
          <div className="min-h-minus-header flex items-center justify-center"><Loader2 className="animate-spin w-10 h-10 text-[#bdae6e]" /></div>
        ) : (
          <>
            <Hero content={content} />
            <LatestNews />
          </>
        )
      }
      {/* <Services /> */}
      {/* <ContactUs /> */}
    </div>
  );
}
export default Home;
