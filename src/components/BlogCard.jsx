import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  return (
    <div className="w-[360px] md:w-[400px] h-[480px] md:h-[500px] shadow-2xl p-8 rounded-2xl bg-slate-100 mt-3">
      <img
        onClick={() => {
          navigate(`/blog/${blog._id}`);
        }}
        className="rounded-lg  w-[360px] md:w-[400px] cursor-pointer h-[50%] "
        src={
          blog.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&usqp=CAU"
        }
        alt=""
      />
      <div className="flex justify-between">
        <h1 className="text-lg md:text-xl font-bold text-red-500">
          {blog.title}
        </h1>
        <h1 className="text-lg md:text-xl font-bold text-red-500 mb-2">
          {blog.author}
        </h1>
      </div>
      <p className="text-justify indent-10 line-clamp-6">{blog.content}</p>
      <div className="flex justify-between mt-3 items-center">
        <button
          onClick={() => {
            navigate(`/blog/${blog._id}`);
          }}
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
        >
          Read More
        </button>
        <span className="text-red-600 font-bold hover:underline ">
          {" "}
          {blog?.createdAt?.split("T")[0]}{" "}
          {blog?.createdAt?.split("T")[1].split(".")[0]}
        </span>
      </div>
    </div>
  );
};

export default BlogCard;
