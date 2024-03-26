/* eslint-disable react-hooks/exhaustive-deps */
import { useNavigate, useParams } from "react-router-dom";
import useBlogCalls from "../services/useBlogCalls";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const SingleBlog = () => {
  const { id } = useParams();

  const { blogOneGet } = useBlogCalls();
  const { blog } = useSelector((state) => state.blog);
  const navigate = useNavigate();

  useEffect(() => {
    blogOneGet(id);
  }, []);

  return (
    <div className="w-[360px] md:w-4/6 shadow-2xl p-8 mx-auto rounded-2xl bg-slate-100 mt-3 mb-5">
      <h1 className="text-lg md:text-xl font-bold text-red-600 text-center mb-3 ">
        {" "}
        SINGLE BLOG PAGE
      </h1>
      <img
        className="rounded-lg  w-[360px] md:w-3/4 block mx-auto md:h-[300px] cursor-pointer "
        src={
          blog?.image ||
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSdReLeTDjSn6-KVDiVMd4KJ7bE9TPxn82_g&usqp=CAU"
        }
        alt=""
      />
      <div className="mx-auto md:w-3/4">
        <div className="flex justify-between">
          <h1 className="text-lg md:text-xl font-bold text-red-500">
            {blog?.title}
          </h1>
          <h1 className="text-lg md:text-xl font-bold text-red-500 mb-2">
            {blog?.author}
          </h1>
        </div>
        <p className="text-justify indent-10  ">{blog?.content}</p>
        <div className="flex justify-between items-center mt-1">
          <button
            onClick={() => navigate(-1)}
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Go Back
          </button>
          <span className="text-red-600 font-bold hover:underline ">
            {" "}
            {blog?.createdAt?.split("T")[0]}{" "}
            {blog?.createdAt?.split("T")[1].split(".")[0]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
