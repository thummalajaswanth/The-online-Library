import React from "react";
import useFetch from "../hooks/useFetch";
import ServiceList from "./ServiceList";
import NavabarComp from "./NavabarComp";

const Services = () => {
  const {
    data: services,
    isPending,
    error,
  } = useFetch("http://localhost:5000/services");

  return (
    <div>
      <NavabarComp />
      <div className="services">
        {error && <p>{error}</p>}
        {isPending && (
          <div className="d-flex justify-content-center mt-5">
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
        {services && <ServiceList services={services} />}
      </div>
    </div>
  );
};

export default Services;
