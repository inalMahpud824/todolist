import { Link } from "react-router-dom";

const AutLayout = (props) => {
  const { title, children, description, type } = props;
  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-tl from-slate-300 to-slate-500">
        <div className="bg-white min-h-screen md:min-h-fit w-full pt-4 rounded-md drop-shadow-lg shadow-2xl p-5 md:w-[50%] lg:w-[40%]">
          <h1 className="text-2xl font-bold text-center pb-2">{title}</h1>
          <h2 className="text-xl text-center mb-2">{description}</h2>
          {children}
          <Navigation type={type}/>
        </div>
      </div>
    </>
  );
};


const Navigation = ({ type }) => {
  if (type === "login") {
    return (
      <p className="text-center mb-6 mt-2 text-sm">
        don't have an account?{" "}
        <Link to="/register" className="font-bold mt-5 text-blue-600 hover:text-blue-300">
          Register
        </Link>
      </p>
    );
  }
  else if (type === "register") {
    return (
      <p className="text-center mb-6 mt-2 text-sm">
        have an account?{" "}
        <Link to="/" className="font-bold mt-5 text-blue-600 hover:text-blue-300">
          Login
        </Link>
      </p>
    );
  }
};

export default AutLayout;
