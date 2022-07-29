import "./App.css";
import React, { useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Sledgehammer",
      price: 125.75,
      description:
        "A sledgehammer is a tool used in the construction of structures.",
      image:
        "http://mobileimages.lowes.com/productimages/7f932743-2c93-4100-b243-649cf39cb192/08428615.jpg",
    },
    {
      id: 2,
      name: "Axe",
      price: 190.5,
      description: "An axe is a tool used for chopping wood.",
      image:
        "https://cdn.dictum.com/media/image/38/e1/13/721182_01_P_WE_8_Robin_Wood_Bildhauerbeil_inkl_Lederscheide_WZ_jpg.jpg",
    },
    {
      id: 3,
      name: "Bandsaw",
      price: 562.13,
      description: "A bandsaw is a tool used for sawing wood.",
      image: "https://www.poolewood.co.uk/wp-content/uploads/01445.jpg",
    },
    {
      id: 4,
      name: "Chainsaw",
      price: 624.99,
      description: "A chainsaw is a tool used for sawing wood.",
      image:
        "https://www.radmoretucker.co.uk/wp-content/uploads/2018/01/435.jpg",
    },
    {
      id: 5,
      name: "Drill",
      price: 789.99,
      description: "A drill is a tool used for mining.",
      image:
        "https://9dbb1f6ce47d4ca3e397-fa5e19980981d5458cd0ea2d7efa41ab.ssl.cf1.rackcdn.com/products/photos/large_896ea5a7-e643-4d5c-a2c2-9ee1be9cdb15.jpg",
    },
    {
      id: 6,
      name: "Hammer",
      price: 112.55,
      description:
        "A hammer is a tool used for pounding, shaping, or otherwise breaking down a solid.",
      image: "https://m.media-amazon.com/images/I/71tTWyypTKL._AC_SL1500_.jpg",
    },
    {
      id: 7,
      name: "Jigsaw",
      price: 812.75,
      description: "A jigsaw is a tool used for assembling pieces of a puzzle.",
      image: "https://images.epagine.fr/070/0634482606070_jm.jpg",
    },
  ]);
  return (
    <div className="container">
      <h1>Shopping Challenge</h1>

      <ProductList products={products} />
    </div>
  );
}

export default App;
