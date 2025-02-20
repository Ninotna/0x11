import Footer from "../../components/Footer/Footer";
import Error404 from "../NotFound/Error404";
import Carousel from "../../components/Carousel/Carousel";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useParams } from "react-router-dom";
import Tags from "../../components/Tags/Tags";
import Rating from "../../components/Rating/Rating";
import logementsData from "../../data/logements.json"; // Fichier JSON contenant les hébergements

function Accomodation() {
  const { id } = useParams(); // Récupère l'ID depuis l'URL
  const accomodation = logementsData.find((logement) => logement.id === id);

  if (!accomodation) {
    return <Error404 />; // Redirige vers une page 404 si l'ID est invalide
  }

  return (
    <div className="container">
      <main className="main__accomodation">
        <div className="main__accomodation--carousel">
          <Carousel data={accomodation} />
        </div>
        <div className="main__accomodation--infos">
          <section className="accomodation__infos">
            <div className="accomodation__infos--details">
              <h1>{accomodation.title}</h1>
              <p>{accomodation.location}</p>
            </div>
            <div className="accomodation__infos--tags">
              <Tags data={accomodation.tags} />
            </div>
          </section>
          <section className="accomodation__host">
            <div className="accomodation__host--profil">
              <div className="accomodation__host--profilName">
                {accomodation.host.name}
              </div>
              <div className="accomodation__host--profilPix">
                <img
                  src={accomodation.host.picture}
                  alt={accomodation.host.name}
                />
              </div>
            </div>
            <div className="accomodation__host--rating">
              <Rating data={accomodation.rating} />
            </div>
          </section>
        </div>
        <div className="main__accomodation--dropdowns">
          <div className="main__accomodation--dropdown">
            <Dropdown title="Description" content={accomodation.description} />
          </div>
          <div className="main__accomodation--dropdown">
            <Dropdown title="Equipement" content={accomodation.equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Accomodation;
