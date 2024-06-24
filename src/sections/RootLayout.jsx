import { Outlet } from "react-router";
import Footer from "./Footer";
import Nav from "../components/Nav";
// import { useLocation } from "react-router";
// import ViewDetailsNav from "../components/ViewDetailsNav";
// import { useState, useEffect } from "react";
function RootLayout() {
  // const location = useLocation();
  // const [isViewDetails, setIsViewDetails] = useState(false);
  // console.log(location.pathname);
  // useEffect(() => {
  //   location.pathname === "/"
  //     ? setIsViewDetails(true)
  //     : setIsViewDetails(false);
  // }, [location.pathname, setIsViewDetails]);
  // console.log(isViewDetails);

  const DynamicNav =  <Nav />;
  return (
    <>
      {DynamicNav}
      <main>
        <Outlet />
      </main>

      <footer className=" padding-x padding-t pb-8 bg-main-bg">
        <Footer />
      </footer>
    </>
  );
}

export default RootLayout;
