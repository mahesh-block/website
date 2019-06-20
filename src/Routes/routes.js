import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import ContactUs from "../components/pages/ContactUs";

const routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Route path="/ContactUs" exact component={ContactUs} />
      </BrowserRouter>
    </div>
  );
};

export default routes;
