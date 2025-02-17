import { useEffect, useState } from "react";
import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";
import logementsData from "../../data/logements.json";

const Home = () => {
  // Le composant Home va s'éxécuter 2 fois (1 fois avec un tableau vide
  //  et 1 fois avec les données)
  const [logements, setLogements] = useState([]); // créer une variable d'état qui permet de recharger
  // la valeur de logements à chaque fois que la valeur de logementsData change
  // Si la variable logements change alors le changement est rechargé.
  // Le rechargement automatique des données est géré par React.
  // useState permet de déclarer une variable d'état et de la mettre à jour.
  // Contrairement à JS plainvanilla,
  // React va recharger la valeur de logements à chaque fois que la valeur de logementsData change.

  useEffect(() => {
    setLogements(logementsData);
  }, []);
  // useEffect permet de déclencher une action à chaque fois que le composant est monté.
  // Fonction Hook qui se déclenche tout au long du cycle de vie du composant.
  // useEffect ici sera exécuté une seule fois, lors du premier rendu du composant.

  // ci-dessous, on va envoyer les props (parametres) au composant Banner, composant react fonctionnel.
  // Si image ou text change, le composant Banner sera rechargé.
  // On utilise un key unique pour améliorer la performance de l'app React.
  // c'est lié au cycle de vie du composant. Ca permet de dire à React
  // que c'est un composant différent.
  return (
    <div className="home">
      <Banner
        image="/assets/banner.jpg"
        text="Chez vous, partout et ailleurs"
      />

      <div className="grid">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            cover={logement.cover}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
