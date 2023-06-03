import { useParams } from "react-router-dom";
import React , { useEffect, useState }from 'react';
import Banner from '../components/Banner'
import Descriptif from '../components/Descriptif';
import jsonData from "../data/logements.json";

const FicheLogement = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      setData(jsonData);
    }, []);

   
    const {logementId} = useParams();

    const objet = jsonData.find(item => item.id === logementId);
 console.log(objet)


    return (
        <div>
            <Banner />
            <div className="cards">
      <p>{objet.title}</p>
    </div>
        </div>
    );
};

export default FicheLogement;