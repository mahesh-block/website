import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import Header from "../Header_Footer/Header";
import "../resources/style.css";
import Home from "./Home";
import ContactUs from "./pages/ContactUs";
import "react-sticky-header/styles.css";
import StickyHeader from "react-sticky-header";
import OurTeam from "./pages/OurTeam";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import Projects from "./pages/Projects";
import Footer from "../Header_Footer/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <StickyHeader header={<Header />} />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/AboutUs" component={AboutUs} />
          <Route exact path="/ContactUs" component={ContactUs} />
          <Route exact path="/OurTeam" component={OurTeam} />
          <Route exact path="/OurWork" component={OurWork} />
          <Route exact path="/Projects" component={Projects} />
        </Switch>   
       <Footer/>    
      </div>
    </BrowserRouter>
  );
};

export default App;
