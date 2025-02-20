import { NavLink } from "react-router-dom";
// utilisation de NavLink pour naviguer entre les pages plutot que
// Link pour avoir un style différent

function Card({ data }) {
  return (
    <article className="card__accomodation">
      <NavLink
        className="card__acccomodation--link"
        to={`/logement/${data.id}`}
        state={{ accomodationDatas: data }}
        // state={{ test404: data }}
      >
        <div className="card__accomodation--img">
          <img src={data.cover} alt={`Lien vers l'hébergement ${data.title}`} />
        </div>
        <div className="card__accomodation--caption">
          <h3>{data.title}</h3>
        </div>
      </NavLink>
    </article>
  );
}

export default Card;
