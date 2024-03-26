import { useSelector } from "react-redux";

const Profile = () => {
  function capitalizeFirstLetter(str) {
    // Boş dize kontrolü
    if (str === "") return "";

    // İlk harfi büyük harfe dönüştür ve geri kalanı küçük harfe dönüştür
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
  const { user } = useSelector((state) => state.auth);
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0">
            <img
              className="md:h-48 w-full object-cover md:w-48"
              src="https://icons.veryicon.com/png/o/miscellaneous/standard/avatar-15.png"
              alt="Profile Picture"
            />
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide text-lg text-indigo-500 font-semibold">
              User Type : <span className="text-black">Blogger </span>
            </div>
            <h2 className="block mt-1 text-md leading-tight font-medium text-indigo-500 ">
              Name:{" "}
              <span className="text-red-500">
                {capitalizeFirstLetter(user?.username)}{" "}
              </span>
            </h2>
            <h2 className="block mt-1 text-md leading-tight font-medium text-indigo-500">
              {" "}
              Email: <span className="text-red-500">{user?.email}</span>
            </h2>
            <h3 className="block mt-1 text-md leading-tight font-medium text-indigo-500">
              {" "}
              Created At:{" "}
              <span className="text-red-500">
                {user.createdAt.split("T")[0]}{" "}
              </span>
            </h3>
            <p className="mt-2 text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nec iaculis mauris. Quisque non justo id diam facilisis maximus.
            </p>
            <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 my-2 px-4 rounded">
              <a href="#" className="text-white  font-semibold">
                Edit Profile
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
