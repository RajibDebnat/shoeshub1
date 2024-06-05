import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./components/Error";
import AllComponents from "./AllComponents";
import RootLayout from "./sections/RootLayout";
import ViewDetail from "./components/Pages/ViewDetail";
import ProductPage from "./components/Pages/ProductPage";
import Terms from "./components/Pages/Terms";
import TermsAndConditions from "./components/Pages/Terms&Condition";
import PaymentPolicy from "./components/Pages/PaymentPolicy.jsx";
import ReturnRefundPolicy from "./components/Pages/PrivacyPolicy.jsx";
// import TermsAndConditions from "./components/Pages/Terms&Condition";
import {
  Adidas,
  Retro,
  AirForce,
  AirJordan,
  TravisScott,
  LowDunks,
} from "./components/category/category.js";
// import { useState,useEffect,useRef } from "react";
// import { useInView } from "framer-motion";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <AllComponents /> },
      { path: "view-details", element: <ViewDetail /> },
      { path: "learn-more", element: <ViewDetail /> },
      { path: "terms&conditions", element: <Terms /> },
      { path: "product", element: <ProductPage /> },
      { path: "termsandcoditions", element: <TermsAndConditions /> },
      { path: "adidas", element: <Adidas /> },
      { path: "retro", element: <Retro /> },
      { path: "air-jordans", element: <AirJordan /> },
      { path: "travis-scott", element: <TravisScott /> },
      { path: "air-force", element: <AirForce /> },
      { path: "low-dunks", element: <LowDunks /> },
      { path: "payment-policy", element: <PaymentPolicy /> },
      {path:"return-refund-policy",element:<ReturnRefundPolicy/>},
      {path:"termsandconditions",element:<TermsAndConditions/>}
      
      // /adidas
      // /retro
      // air-jordans
      // travis-scott
      // air-force
      // low-dunks
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
{
  /* <img src={headerLogo} alt="Logo" width={130} height={29} className="max-lg:z-[40] max-lg:relative max-lg:bg-white rounded-xl"/> */
}
