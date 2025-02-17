import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import "../assets/styles/about.scss";

const About = () => {
  return (
    <div className="about">
      <Banner image="/assets/about-banner.jpg" text="En savoir plus sur Kasa" />
      <div className="about-content">
        <Collapse
          title="Fiabilité"
          content="Chez Kasa, nous garantissons que toutes les annonces sont vérifiées pour assurer une expérience de confiance totale."
        />
        <Collapse
          title="Respect"
          content="Nous nous engageons à promouvoir des comportements respectueux entre les utilisateurs, et à maintenir un environnement harmonieux."
        />
        <Collapse
          title="Service"
          content="Notre service client est disponible pour répondre à vos besoins et garantir une expérience fluide à tout moment."
        />
        <Collapse
          title="Sécurité"
          content="La sécurité est une priorité. Nous mettons en œuvre des standards stricts pour protéger nos hôtes et leurs invités."
        />
      </div>
    </div>
  );
};

export default About;
