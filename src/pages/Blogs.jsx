/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import useBlogCalls from "../services/useBlogCalls";
import { useSelector } from "react-redux";
import BlogCard from "../components/BlogCard";
import Form from "../components/Form";

const Blogs = () => {
  const { getMyBlogs } = useBlogCalls();
  const { user } = useSelector((state) => state.auth);
  const { myBlogs } = useSelector((state) => state.blog);
  // console.log("myBlogs :>> ", myBlogs);

  useEffect(() => {
    getMyBlogs(user._id);
  }, []);
  return (
    <div className="flex flex-col  md:flex-row justify-center ">
      <div className="md:w-1/2 h-full bg-red-100 pt-5">
        <h1 className="text-lg md:text-2xl font-bold text-blue-500 text-center mb-2">
          My Blogs
        </h1>
        <div className="flex flex-wrap gap-2 justify-center items-center">
          {myBlogs?.map((blog) => {
            return <BlogCard blog={blog} key={blog._id} />;
          })}
        </div>
      </div>
      <div className="md:w-1/2  bg-blue-100 pt-5">
        <h1 className="text-lg md:text-2xl font-bold text-red-500 text-center mb-5">
          Create New Blog
        </h1>
        <div>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Blogs;
