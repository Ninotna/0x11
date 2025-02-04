import { useParams } from "react-router-dom";
import logementsData from "../data/logements.json"; // Fichier contenant les données des propriétés
import Slideshow from "../components/Slideshow";

const PropertyDetails = () => {
    const { id } = useParams();
    const property = logementsData.find((logement) => logement.id === id);

    if (!property) {
        return <h1>Propriété introuvable</h1>;
    }

        // Mapper "pictures" en "images"
        const images = property.pictures;

    return (
        <div className="property-details">
            <h1>{property.title}</h1>
            <Slideshow images={images} />
        </div>
    );
};

export default PropertyDetails;
