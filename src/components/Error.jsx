import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="main-container">
      <h1>Opps!!!!!!!!!!</h1>
      <h1>Something Went Wrong😰</h1>
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
