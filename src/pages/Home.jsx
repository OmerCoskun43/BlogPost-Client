/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { useSelector } from "react-redux";
import useBlogCalls from "../services/useBlogCalls";
import BlogCard from "../components/BlogCard";

const Home = () => {
  const { blogs } = useSelector((state) => state.blog);
  const { blogsList } = useBlogCalls();

  // console.log("blogs :>> ", blogs);

  useEffect(() => {
    blogsList();
  }, []);
  return (
    <div className="container mx-auto mt-2 mb-2">
      <h1 className="text-3xl font-bold text-emerald-600 text-center animate-bounce">
        BLOG POSTS
      </h1>

      <div className="flex flex-wrap gap-2 justify-center items-center">
        {blogs?.map((blog) => {
          return <BlogCard blog={blog} key={blog._id} />;
        })}
      </div>
    </div>
  );
};

export default Home;
