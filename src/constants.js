import { CiPizza } from "react-icons/ci";
import { GiScooter } from "react-icons/gi";
import { GrLocation } from "react-icons/gr";
import { MdOutlineMailOutline, MdPhoneIphone } from "react-icons/md";
import { RiTimerFlashLine } from "react-icons/ri";

export const navLinks = [
  { href: "/", urlName: "Home" },
  { href: "/menu", urlName: "Menu" },
  //   { href: "/about", urlName: "About" },
  { href: "/contact", urlName: "Contact" },
];

export const menuCategories = ["PIZZA", "SUSHI", "SALADS", "BURGER", "DESERT"];

export const dishesData = [
  {
    imgUrl: "images/popular_dish_1.png",
    rating: 3,
    name: "Water Bottle",
    description:
      "Investing in a reusable water bottle that you can refill throughout the...",
    price: 10.18,
  },
  {
    imgUrl: "images/popular_dish_2.png",
    rating: 4,
    name: "Vegge Lover",
    description:
      "Extra-virgin olive oil, garlic, mozzarella cheese, onions,...",
    price: 14.9,
  },
  {
    imgUrl: "images/popular_dish_3.png",
    rating: 5,
    name: "Tropicana Juice",
    description:
      "View great tasting Tropicana Orange Juice and Juice Drink Products....",
    price: 11.11,
  },
  {
    imgUrl: "images/popular_dish_4.png",
    rating: 4,
    name: "Trio Cheese",
    description: "Mouth watering pepperoni, cabanossi, mushroom, capsicum...",
    price: 16.93,
  },
];

const menuOption1 = [
  {
    imgUrl: "/images/menu_food_1.png",
    name: "Vegge Lover",
    rating: 3,
    description:
      "Extra-virgin olive oil, garlic, mozzarella cheese, onions, mushrooms, green olives, black olives",
    price: 14.9,
  },
  {
    imgUrl: "/images/menu_food_2.png",
    name: "Black Coffee",
    rating: 4,
    description:
      "Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts",
    price: 11.8,
  },
  {
    imgUrl: "/images/menu_food_3.png",
    name: "Blueberry Shake",
    rating: 5,
    description:
      "Iced coffee is a type of coffee beverage served chilled, brewed variously with the fundamental…",
    price: 10.78,
  },
  {
    imgUrl: "/images/menu_food_4.png",
    name: "Apricot Chicken",
    rating: 3,
    description:
      "Crispy bacon, tasty ham, pineapple, onion and stretchy mozzarella, finished with a BBQ swirl.",
    price: 18.3,
  },
  {
    imgUrl: "/images/menu_food_5.png",
    name: "Pepperoni Calzone",
    rating: 3,
    description:
      "Piled with shrimp, calamari, clams, mussels, surimi and stretchy mozzarella, seasoned with tangy lemon pepper.",
    price: 12.8,
  },
  {
    imgUrl: "/images/menu_food_6.png",
    name: "Fresh Lime",
    rating: 3,
    description:
      "Browse unique Coca-Cola products, clothing, & accessories, or customize Coke bottles and gifts",
    price: 16.06,
  },
];

const menuOption2 = [
  {
    imgUrl: "/images/menu_food_7.png",
    name: "Tropicana Juice",
    rating: 4,
    description:
      "View great tasting Tropicana Orange Juice and Juice Drink Products. Featuring Tropicana Orange Juice",
    price: 14.9,
  },
  {
    imgUrl: "/images/menu_food_8.png",
    name: "Trio Cheese",
    rating: 3,
    description:
      "Mouth watering pepperoni, cabanossi, mushroom, capsicum, black olives and stretchy mozzarella,",
    price: 11.8,
  },
  {
    imgUrl: "/images/menu_food_9.png",
    name: "Trio Cafe",
    rating: 5,
    description:
      "Trio Cafe is Family owned establishment located in Boston Waterfront next to World Trade Center.",
    price: 10.78,
  },
  {
    imgUrl: "/images/menu_food_10.png",
    name: "Tagliatelle Molto",
    rating: 4,
    description:
      "A mighty meaty double helping of all the reasons you love our burger.",
    price: 18.3,
  },
  {
    imgUrl: "/images/menu_food_11.png",
    name: "Supreme Pizza",
    rating: 4,
    description:
      "Ricotta, sun dried tomatoes, garlic, mozzarella cheese, topped with lightly drizzled red sauce, pesto, and…",
    price: 12.8,
  },
  {
    imgUrl: "/images/menu_food_12.png",
    name: "Summer Pizza",
    rating: 5,
    description:
      "Shrimp, Red Capsicum, Green Capsicum, Onion, Chilli flakes, Lemon Pepper, Mozzarella, finished with Aioli",
    price: 16.06,
  },
];

//   TODO: change this by taking the keys from menuCategories
export const menuOptions = {
  PIZZA: menuOption1,
  SUSHI: menuOption2,
  SALADS: menuOption1,
  BURGER: menuOption2,
  DESERT: menuOption1,
};

export const contactOptions = [
    {
      logo: <MdPhoneIphone size={55} color="#ffc222" />,
      title: "Phone",
      content: ["+ 44 123 456 78 90", "+ 844 123 444 77 88"],
    },
    {
      logo: <GrLocation size={55} color="#ffc222" />,
      title: "Address",
      content: [
        "Box 565, Pinney's Beach, Charlestown,",
        "Nevis, West Indies, Caribbean",
      ],
    },
    {
      logo: <MdOutlineMailOutline size={55} color="#ffc222" />,
      title: "Email",
      content: ["contact@example.com", "info@example.com"],
    },
  ];

export const featureContents = [
    {
      heading: "Free shipping",
      content: "Sign up for updates and get free shipping",
      logo: <GiScooter color="#ffc222" size={75} />,
    },
    {
      heading: "30 Minutes Delivery",
      content: "Everything you order will be quickly delivered to your door.",
      logo: <RiTimerFlashLine color="#ffc222" size={75} />,
    },
    {
      heading: "Best Quality Guarantee",
      content: "Poco is an international chain of family restaurants.",
      logo: <CiPizza color="#ffc222" size={75} />,
    },
  ];
