import {
  facebook,
  instagram,
  shieldTick,
  support,
  truckFast,
  twitter,
} from "../assets/icons";
// import { jordan1,jordan2,jordan3,jordan4 } from '../assets/viewDetialsImages/index';
// import { DunkRedBlackToe } from "../assets/images/Lowdunks/Dunk Red Black Toe.webp";
import {
  AF1AirForceTiffanyAmbush,
  AF1Ambush,
  // AirForceWhite,
  AF1WhiteBlackSwoosh,
  jordanCard,
  // airjordanCard,
  DunkBlackTick,
  DunkGreySky,
  DunkLowGrey,
  DunkLowPanda,
  DunkMocha,
  BlueLowDunks,
  TravisScottBrown,
  TravisScottFragmentLow,
  TravisScottGreyWhite,
  Retro4BlackCat,
  Retro4FearPack,
  Retro4FireRedfrom,
  Retro4Panda,
  Retro4WhiteGreen,
  Retro4WhiteOreo,
  RetroMilitaryBlack,
  JordanGreyBlackTick,
  JordanLowGrey,
  JordanLowPanda,
  JordanUniversityBlueCopy,
  YezzyBoost350,
  suparStar,
  adidas,
  retro4,
  airForce,
  airJordan,
  lowDunks,
  traviceScott,
  bigShoe1,
  bigShoe2,
  bigShoe3,
  customer1,
  customer2,
  customerService,
  shoe4,
  shoe5,
  shoe6,
  shoe7,
  shoe8,
  thumbnailShoe1,
  thumbnailShoe2,
  thumbnailShoe3,
  FearlessJordan1,
} from "../assets/images";
import { jordan1, jordan2, jordan3, ReturnImage } from "../assets/images";
import Adidas from "../components/category/Adidas";

export const navLinks = [
  { href: "/view-details", label: "About Us" },
  { href: "/product", label: "Products" },
  { href: "/payment-policy", label: "Payment Policy" },
];

export const shoes = [
  { id: "s3", thumbnail:Retro4FireRedfrom , bigShoe: bigShoe3 ,label:'Retro 4 Fire Red'},
  { id: "s2", thumbnail: YezzyBoost350, bigShoe: bigShoe2 ,label:'Yezzy Boost 350'},
  { id: "s1", thumbnail: jordanCard, bigShoe: bigShoe1 ,label:"Jordan University"},
];

export const shoeCategory = [
  { id: "adi", label: "ADIDAS", href: "/adidas" },
  { id: "ret", label: "RETRO 4", href: "/retro" },
  { id: "air", label: "AIR JORDAN'S", href: "air-jordans" },
  { id: "trav", label: "TRAVIS SCOTT", href: "travis-scott" },
  { id: "force", label: "AIR FORCE'S", href: "air-force" },
  { id: "low", label: "LOW DUNKS", href: "low-dunks" },
];
export const statistics = [
  { value: "7+", label: "Brands", id: "i1" },
  { value: "50k+", label: "Successful Delivery", id: "i2" },
  { value: "50k+", label: "Customers", id: "i3" },
];

export const products = [
  {
    // imgURL: shoe4,
    // name: "Nike Air Jordan-01",
    // highPrice: "",
    // price: "200.20",
    // rating: "(4.1)",
    src: YezzyBoost350,
    title: "Yeezy Boost 350 Grey White",
    price: "1,299",
    subPrice: "2,499",
    discount: "48%",
    rating: "4.6",
  },

  {
    src: suparStar,
    title: "Superstar White",
    price: "1,299",
    subPrice: "2,499",
    discount: "48%",
    rating: "4.1",
  },
  {
    src: RetroMilitaryBlack,
    title: "Retro 4 Military Black",
    price: " 1,699",
    subPrice: "3,499",
    discount: "51%",
    rating: "4.2",
  },
  {
    src: Retro4FearPack,
    title: "Retro 4 Fear Pack",
    price: " 1,599",
    subPrice: " 3,399",
    discount: "53%",
    rating: "4.8",
  },
  {
    src: Retro4FireRedfrom,
    title: "Retro 4 Fire Red",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
    rating: "4.4",
  },
  {
    src: JordanLowPanda,
    title: "Jordan Low Panda",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
    rating: "4.4",
  },
  {
    src: JordanLowGrey,
    title: "Jordan Low Grey",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
    rating: "4.8",
  },
];

export const services = [
  {
    imgURL: truckFast,
    label: "Free shipping",
    subtext: "Enjoy seamless shopping with our complimentary shipping service.",
  },
  {
    imgURL: shieldTick,
    label: "Secure Payment",
    subtext:
      "Experience worry-free transactions with our secure payment options.",
  },
  {
    imgURL: support,
    label: "Love to help you",
    subtext: "Our dedicated team is here to assist you every step of the way.",
  },
];

export const reviews = [
  {
    imgURL: customer1,
    customerName: "Morich Brown",
    rating: 4.5,
    feedback:
      "The attention to detail and the quality of the product exceeded my expectations. Highly recommended!",
  },
  {
    imgURL: customer2,
    customerName: "Lota Mongeskar",
    rating: 4.5,
    feedback:
      "The product not only met but exceeded my expectations. I'll definitely be a returning customer!",
  },
];

export const footerLinks = [
  {
    title: "Products",
    links: [
      { name: "Air Force 1", link: "product", highPrice: "", price: "250" },
      { name: "Air Max 1", link: "product", highPrice: "", price: "250" },
      { name: "Air Jordan 1", link: "product", highPrice: "", price: "250" },
      { name: "Air Force 2", link: "product", highPrice: "", price: "250" },
      {
        name: "Nike Waffle Racer",
        link: "product",
        highPrice: "",
        price: "250",
      },
      { name: "Nike Cortez", link: "product", highPrice: "", price: "250" },
    ],
  },
  {
    title: "Help",
    links: [
      { name: "About us", link: "view-details" },
      { name: "FAQs", link: "view-details" },

      { name: "Return & refund ", link: "return-refund-policy" },
      { name: "Payment policy", link: "payment-policy" },
      // termsandconditions
    ],
  },
  {
    title: "Get in touch",
    links: [
      { name: "customer@nike.com", link: "mailto:customer@nike.com" },
      { name: "+92554862354", link: "tel:+92554862354" },
      {
        name: "  Boxa Feedar Road, Alipurduar-I, West Bengal-736123",
        link: "",
      },
    ],
  },
];

export const socialMedia = [
  { src: facebook, alt: "facebook logo", href: "https://www.facebook.com/" },
  { src: twitter, alt: "twitter logo", href: "https://www.facebook.com/" },
  { src: instagram, alt: "instagram logo", href: "https://www.facebook.com/" },
];

export const DetailsFeatures = [
  {
    title: "Experience Unrivaled Quality",
    subTitle: "Quality",
    description:
      "Indulge in craftsmanship that surpasses expectations. Our meticuloattention to detail ensures enduring quality in every step you take.Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.",
    src: jordan1,
  },
  {
    title: "Discover Supreme Comfort",
    subTitle: "Comfort",
    description:
      "Experience blissful comfort with our innovative designs. From plush cushioning to ergonomic support, our footwear redefines relaxation.Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.",
    src: jordan2,
  },
  {
    title: "Stay Ahead of Trends",
    subTitle: "Trending",
    description:
      "Be the trendsetter, not the follower. Explore our latest styles and stay ahead of the curve with footwear that's always in vogue.Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.",
    src: jordan3,
  },
  {
    title: "Elevate Your Style",
    subTitle: "Style",
    description:
      "Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.",
    src: jordan1,
  },
  {
    title: "Easy to Return With Ease",
    subTitle: "Return Policy",
    description:
      "Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.",
    src: ReturnImage,
  },
  {
    title: "24/7 Customer Service",
    subTitle: "Customer Service",
    description:
      "Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.Make a statement with footwear that reflects your unique style. From classic elegance to modern flair, find the perfect pair to express yourself.",
    src: customerService,
  },
];

export const FAQs = [
  {
    question: "How can I place an order?",
    answer:
      "You can easily place an order by sending a message to our WhatsApp number: 9593623365. Our dedicated sales team will assist you throughout the ordering process.",
  },
  {
    question: "What information do I need to provide when placing an order?",
    answer:
      "To process your order, please provide the following detailsProduct name or codeDesired quantity and ",
  },
  {
    question: "How can I pay for my order?",
    answer:
      "We offer secure payment options via WhatsApp. You can make payments conveniently through WhatsApp banking or other supported payment methods. Once your order details are confirmed, our team will provide you with payment instructions",
  },
  {
    question: "Can I track the statof my order?",
    answer:
      "Yes, you will receive a tracking number once your order has been shipped. You can use this tracking number to monitor the statand estimated delivery date of your package.Question: What is your return and exchange policy?",
  },
  {
    question: "What is your return and exchange policy?",
    answer:
      "We offer a hassle-free return and exchange policy within 30 days of purchase. Shoes must be unworn and in their original packaging for a full refund or exchange. Please refer to our website or contact our customer support team for more details.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we provide international shipping to many countries. Shipping rates and delivery times may vary depending on the destination. Please check our shipping policy for more information.",
  },
  {
    question: "How can I contact customer support for assistance?",
    answer:
      "For any inquiries or assistance regarding your order, feel free to contact our customer support team via WhatsApp or email. We're here to help you with any questions or concerns you may have.",
  },
];
export const brand = [
  {
    title: "ADIDAS",
    src: adidas,
    href: "adidas",
    id: "adi",
  },
  {
    title: "RETRO 4",
    src: retro4,
    href: "retro",
    id: "ret4",
  },
  {
    title: "air jordan",
    src: airJordan,
    href: "air-jordans",
    id: "airJor",
  },
  {
    title: "travis scott",
    src: traviceScott,
    href: "travis-scott",
    id: "traScot",
  },
  {
    title: "air force",
    src: airForce,
    href: "air-force",
    id: "airFo",
  },
  {
    title: "low dunks",
    src: lowDunks,
    href: "low-dunks",
    id: "lowDunk",
  },
  // /adidas
  // /retro
  // air-jordans
  // travis-scott
  // air-force
  // low-dunks
];
export const allProducts = [
  {
    src: YezzyBoost350,
    title: "Yeezy Boost 350 Grey White",
    price: "1,299",
    subPrice: "2,499",
    discount: "48%",
  },
  {
    src: suparStar,
    title: "Superstar White",
    price: "1,299",
    subPrice: "2,499",
    discount: "48%",
  },
  {
    src: RetroMilitaryBlack,
    title: "Retro 4 Military Black",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: Retro4BlackCat,
    title: "Retro 4 Black Cat",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: Retro4FearPack,
    title: "Retro 4 Fear Pack",
    price: " 1,599",
    subPrice: " 3,399",
    discount: "53%",
  },
  {
    src: Retro4WhiteOreo,
    title: "Retro 4 White Oreo",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: Retro4Panda,
    title: "Retro 4 Panda",
    price: " 1,599",
    subPrice: " 3,399",
    discount: "53%",
  },
  {
    src: Retro4FireRedfrom,
    title: "Retro 4 Fire Red",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: Retro4WhiteGreen,
    title: "Retro 4 White Green",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: JordanLowPanda,
    title: "Jordan Low Panda",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: JordanLowGrey,
    title: "Jordan Low Grey",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: JordanGreyBlackTick,
    title: "Jordan Grey Black Tick",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
  {
    src: FearlessJordan1,
    title: "Fearless Jordan 1",
    price: " 1,499",
    subPrice: " 2,899",
    discount: "48%",
  },
  {
    src: JordanUniversityBlueCopy,
    title: "Jordan University Blue Copy",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
];

// const falseData = [
//   { name: ["Rajib", "Riya", "Rajib", "Abhijit"] },
//   { name: ["Amit", "Riya", "Rajib", "Abhijit"] },
//   { name: ["Riju", "Riya", "Rajib", "Abhijit"] },
//   { name: ["Sharmila", "Riya", "Rajib", "Abhijit"] },
//   { name: ["Abhijit", "Riya", "Rajib", "Abhijit"] },
//   { name: ["Bisal", "Riya", "Rajib", "Abhijit"] },
// ];
// export { falseData };

export const adidasData = [
  {
    src: YezzyBoost350,
    title: "Yeezy Boost 350 Grey White",
    price: "1,299",
    subPrice: "2,499",
    discount: "48%",
  },
  {
    src: suparStar,
    title: "Superstar White",
    price: "1,299",
    subPrice: "2,499",
    discount: "48%",
  },
];
export const retro4Data = [
  {
    src: RetroMilitaryBlack,
    title: "Retro 4 Military Black",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: Retro4BlackCat,
    title: "Retro 4 Black Cat",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: Retro4FearPack,
    title: "Retro 4 Fear Pack",
    price: " 1,599",
    subPrice: " 3,399",
    discount: "53%",
  },
  {
    src: Retro4WhiteOreo,
    title: "Retro 4 White Oreo",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: Retro4Panda,
    title: "Retro 4 Panda",
    price: " 1,599",
    subPrice: " 3,399",
    discount: "53%",
  },
  {
    src: Retro4FireRedfrom,
    title: "Retro 4 Fire Red",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
  {
    src: Retro4WhiteGreen,
    title: "Retro 4 White Green",
    price: " 1,699",
    subPrice: " 3,499",
    discount: "51%",
  },
];
export const airJordanData = [
  {
    src: JordanLowPanda,
    title: "Jordan Low Panda",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: JordanLowGrey,
    title: "Jordan Low Grey",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: JordanGreyBlackTick,
    title: "Jordan Grey Black Tick",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
  {
    src: FearlessJordan1,
    title: "Fearless Jordan 1",
    price: " 1,499",
    subPrice: " 2,899",
    discount: "48%",
  },
  {
    src: JordanUniversityBlueCopy,
    title: "Jordan University Blue Copy",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
];
export const travisScottData = [
  {
    src: TravisScottFragmentLow,
    title: "Travis Scott Fragment Low",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
  {
    src: TravisScottGreyWhite,
    title: "Travis Scott Grey White",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
  {
    src: TravisScottBrown,
    title: "Travis Scott Brown",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
];

export const airForceData = [
  {
    // src: AirForceWhite,
    title: "Air Force White",
    price: " 1,249",
    subPrice: " 2,499",
    discount: "50%",
  },
  {
    src: AF1Ambush,
    title: "AF 1 Ambush",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
  {
    src: AF1WhiteBlackSwoosh,
    title: "AF1 White Black Swoosh",
    price: " 1,249",
    subPrice: " 2,499",
    discount: "50%",
  },
  {
    src: AF1AirForceTiffanyAmbush,
    title: "Air Force Tiffany",
    price: " 1,399",
    subPrice: " 2,799",
    discount: "50%",
  },
];

export const lowDunksData = [
  {
    src: DunkLowPanda,
    title: "Dunk Low Panda",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: DunkLowGrey,
    title: "Dunk Low Grey",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: DunkGreySky,
    title: "Dunk Grey Sky",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    // src: DunkRedBlackToe,
    title: "Dunk Red Black Toe",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: DunkBlackTick,
    title: "Dunk Black Tick",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: DunkMocha,
    title: "Dunk Mocha",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
  {
    src: BlueLowDunks,
    title: "Blue Low Dunks",
    price: " 1,299",
    subPrice: " 2,499",
    discount: "48%",
  },
];
