import { Outlet } from "react-router-dom";
import Header from "../components/Layout/Header";
import Footer from "../components/Layout/Footer";
const Root = () =>{
    return <>
      <Header />
      <Outlet />
      <Footer />
    </>
}

export default Root;