import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen  flex justify-center items-center sm:text-xl lg:text-3xl font-extrabold text-red-400">
      <h3>404! Page not found, </h3>
      <Link to="/">
        {" "}
        <p>
          {" "}
          Go <span className="text-blue-500">Home</span>
        </p>
      </Link>
    </div>
  );
};

export default ErrorPage;
