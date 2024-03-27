import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error-container flex flex-col justify-center">
      <div className="error-page flex flex-col justify-evenly items-center">
        <div>
          <h1 className="text-xl lg:text-4xl text-white font-semibold lg:font-bold text-center">
            Oops!
          </h1>
          <h3 className="text-lg lg:text-xl text-white font-semibold lg:font-bold text-center">
            Sorry, an unexpected error has occurred.
          </h3>
          <h3 className="text-lg lg:text-xl text-white font-semibold lg:font-bold text-center">
            This page does not exist.
          </h3>
        </div>

        <div>
          <button className="rounded-xl border-2 text-white p-2 font-semibold">
            <Link to={"/"}>Return to Homepage</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
