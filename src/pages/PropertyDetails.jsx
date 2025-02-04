import { useParams, Navigate } from "react-router-dom";
import logementsData from "../data/logements.json";
import Slideshow from "../components/Slideshow";
import Collapse from "../components/Collapse";
import "../assets/styles/propertydetails.scss";

const PropertyDetails = () => {
    const { id } = useParams();
    const property = logementsData.find((logement) => logement.id === id);

    // Redirection si l'ID est invalide
    if (!property) {
        return <Navigate to="/404" />;
    }

    return (
        <div className="property-details">
            <Slideshow images={property.pictures} />
            <div className="property-header">
                <div>
                    <h1>{property.title}</h1>
                    <p>{property.location}</p>
                    <div className="tags">
                        {property.tags.map((tag, index) => (
                            <span key={index} className="tag">{tag}</span>
                        ))}
                    </div>
                </div>
                <div className="host">
                    <p>{property.host.name}</p>
                    <img src={property.host.picture} alt={property.host.name} />
                </div>
            </div>
            <div className="property-rating">
                {[...Array(5)].map((_, index) => (
                    <span
                        key={index}
                        className={`star ${index < property.rating ? "filled" : ""}`}
                    >
                        ★
                    </span>
                ))}
            </div>
            <div className="property-collapses">
                <Collapse title="Description" content={property.description} />
                <Collapse
                    title="Équipements"
                    content={
                        <ul>
                            {property.equipments.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    }
                />
            </div>
        </div>
    );
};

export default PropertyDetails;
