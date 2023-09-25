import Header from "../components/Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = (props) => {  
  return (
    <>            
      <Header
        carTitle={props.carTitle}
        carTitleLogo={props.carTitleLogo}
        cssClass={props.cssClass}
        text1={props.text1}
        text2={props.text2}
        text3={props.text3}
        text4={props.text4}
        link1={props.link1}
        link2={props.link2}
        link3={props.link3}
        link4={props.link4}
      />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
