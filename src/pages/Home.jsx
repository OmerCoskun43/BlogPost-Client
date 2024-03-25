import { useSelector } from "react-redux";

const Home = () => {
  const { user } = useSelector((state) => state.auth);
  console.log("user  :>> ", user);
  // console.log("token  :>> ", token);
  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;
