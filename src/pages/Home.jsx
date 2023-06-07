import React, { useEffect, useState } from "react";
import Banner from "../components/Banner";
import Cards from "../components/Cards";
import jsonData from "../data/logements.json";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import "../styles/index.css"

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(jsonData);
  }, []);

  return (
    <div className="home">
      <Navigation />
      <Banner />
      <div className="cards">
        {data.map((logement) => (
          <div key={logement.id}>
            <Cards key={logement.id} logement={logement} />
          </div>
        ))}
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Home;
