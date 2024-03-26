import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import useBlogCalls from "../services/useBlogCalls";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { deleteBlog, getMyBlogs, blogsList } = useBlogCalls();

  const handleDelete = (blogId) => {
    deleteBlog(blogId);
    blogsList();
    getMyBlogs(user._id);
  };
  return (
    <div className="w-[360px] md:w-[420px] h-[500px] md:h-[540px] shadow-2xl p-8 rounded-2xl bg-slate-100 mt-3">
      <div className="flex justify-between">
        <span></span>
        <span className="text-md md:text-lg font-bold text-emerald-500">
          {blog?.categoryId?.name}
        </span>
      </div>
      <img
        onClick={() => {
          navigate(`/blog/${blog._id}`);
        }}
        className="rounded-lg  w-[360px] md:w-[400px] cursor-pointer h-[45%] "
        src={
          blog.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&usqp=CAU"
        }
        alt=""
      />
      <div className="flex justify-between h-[10%]">
        <h1 className="text-md md:text-lg font-bold  text-red-500">
          {blog.title.slice(0, 20)} {blog.title.length > 20 ? "..." : ""}
        </h1>
        <h1 className="text-md md:text-lg font-bold text-red-500 mb-2">
          {blog.author}
        </h1>
      </div>
      <p className="text-justify indent-10 line-clamp-6 h-[30%]">
        {blog.content}
      </p>
      <div className="flex items-center justify-between  mt-3">
        <div className="flex gap-2 ">
          <button
            onClick={() => {
              navigate(`/blog/${blog._id}`);
            }}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-1 px-4 rounded"
          >
            Read More
          </button>
          {user?.isAdmin && (
            <button
              onClick={() => handleDelete(blog._id)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-4 rounded"
            >
              Delete
            </button>
          )}
        </div>
        <div className="flex flex-col justify-center items-center">
          <span className="text-red-600 font-bold hover:underline ">
            {" "}
            {blog?.createdAt?.split("T")[0]}{" "}
          </span>

          <span className="text-red-600 font-bold hover:underline ">
            {blog?.createdAt?.split("T")[1].split(".")[0]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
