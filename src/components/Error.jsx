import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="text-center mt-8 font-bold font-serif">
      <h1>Opps!!!!!!!!!!</h1>
      <h1>Something Went Wrong😰</h1>
      <h1>
        {err.status} : {err.statusText}
      </h1>
    </div>
  );
};

export default Error;
