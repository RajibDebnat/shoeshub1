import Home from "./Home";
import CustomerReviews from "./CustomerReviews";
import Footer from "./Footer";
import Services from "./Services";
import SpecialOffer from "./SpecialOffer";
import Subscribe from "./Subscribe";
import SuperQuality from "./SuperQuality";
import PopularProduct from "./PopularProduct";
import HowToOrder from "./HowToOrder"
import Branding from "../components/Branding";
import { func } from "prop-types";
export {
  Home,
  CustomerReviews,
  Footer,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  PopularProduct,
  HowToOrder,
  Branding
};

 export default function priceManupulate(price){
  const prices = price.trim();
const mainPrice = prices.slice(0,1);
const mainprice2 = prices.slice(1,prices.length);
 const manupulatedPrice = `${mainPrice},${mainprice2}`;
 return manupulatedPrice;

}