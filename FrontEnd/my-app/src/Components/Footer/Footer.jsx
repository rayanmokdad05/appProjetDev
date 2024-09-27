import { useEffect, useState } from "react";
import "./Footer.css";

//components
import OffresDetails from '../Offres/OffresDetails'
import OffreForm from '../OffreForm/OffreForm'


const Footer = () => {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    const fetchOffers = async () => {
      const response = await fetch(`${process.env.REACT_APP_BACKEND_API_URL}/api/offers`);
      const json = await response.json();

      if (response.ok) {
        setOffers(json);
      } else {
        console.error("Error fetching offers:", response.statusText);
      }
    };

    fetchOffers();
  }, []);

  return (
    <footer className="lmj-footer">
      <div className="lmj-footer-elem">© 2024, Trouvez un travail</div>

      <div className="offers">
        {offers.length > 0 && offers.map((offer) => (
          <OffresDetails key={offer._id} offer={offer}/>
        ))}
      </div>
      <OffreForm />

      <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
      <input placeholder="Entrez votre mail" />
    </footer>
  );
};

export default Footer;
