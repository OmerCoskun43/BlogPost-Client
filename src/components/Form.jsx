/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import useCategoryCalls from "../services/useCategoryCalls";
import useBlogCalls from "../services/useBlogCalls";

const Form = () => {
  const { user } = useSelector((state) => state.auth);
  const { categoryList } = useCategoryCalls();
  const { categories } = useSelector((state) => state.category);
  const { createBlog, getMyBlogs, blogsList } = useBlogCalls();
  const [formData, setformData] = useState({
    title: "",
    userId: user._id,
    image: "",
    categoryId: "",
    author: user.username,
    content: "",
  });

  const handleChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog(formData);
    getMyBlogs(user._id);
    blogsList();
    setformData({
      title: "",
      userId: user._id,
      image: "",
      categoryId: "",
      author: user.username,
      content: "",
    });
  };

  useEffect(() => {
    categoryList();
  }, []);

  return (
    <div className="flex justify-center pb-10 ">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 w-[360px] md:w-[420px] h-[600px] md:h-[700px]  justify-center p-5 border-2 border-slate-400 rounded-2xl shadow-2xl bg-blue-300 "
      >
        <label className="input-label" htmlFor="title">
          Title
        </label>
        <input
          name="title"
          id="title"
          className="input-style"
          type="text"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title..."
          required
        />
        <label className="input-label" htmlFor="userId">
          UserId
        </label>
        <input
          name="userId"
          id="userId"
          value={user?._id}
          disabled
          className="input-style bg-white"
          type="text"
          placeholder="userId .."
          required
        />
        <label className="input-label" htmlFor="image">
          Image
        </label>
        <input
          name="image"
          id="image"
          value={formData.image}
          className="input-style"
          type="text"
          onChange={handleChange}
          placeholder="image..."
          required
        />
        <label className="input-label" htmlFor="categoryId">
          Category
        </label>
        <select
          required
          className="input-style"
          value={formData.categoryId}
          name="categoryId"
          id="categoryId"
          onChange={handleChange}
        >
          <option value="">Select A Category </option>
          {categories?.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name}
            </option>
          ))}
        </select>
        <label className="input-label" htmlFor="author">
          Author
        </label>
        <input
          type="text"
          id="author"
          name="author"
          disabled
          placeholder="author..."
          className="input-style bg-white"
          value={user?.username}
          required
        />
        <label className="input-label" htmlFor="content">
          Content
        </label>
        <textarea
          className="input-style"
          name="content"
          id="content"
          value={formData.content}
          onChange={handleChange}
          placeholder="Content..."
          rows="5"
          required
        ></textarea>
        <button
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Add New
        </button>
      </form>
    </div>
  );
};

export default Form;
