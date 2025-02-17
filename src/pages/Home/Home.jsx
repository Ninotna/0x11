import homeBanner from "../../assets/picture/homeBanner.svg";
import homeBannerMobile from "../../assets/picture/homeBannerMobile.svg";
import Loader from "../../components/Loader/Loader";
import Footer from "../../components/Footer/Footer";
import useFetch from "../../utils/getData";
import Gallery from "../../components/Gallery/Gallery";
import Error404 from "../NotFound/Error404";

function Home() {
  const { data, isLoading, error } = useFetch("./logements.json");
  // const error = null;

  if (error) {
    // console.log(data);
    return <Error404 />;
  }
  console.log(data);
  return (
    <div className="container">
      <main>
        <div className="main__homeBanner">
          <img
            className="main__homeBanner--img"
            src={homeBanner}
            alt="Bannière de la page d'acceuil avec paysage de montagne"
          />
          <img
            className="main__homeBanner--imgMobile"
            src={homeBannerMobile}
            alt="Bannière de la page d'acceuil avec paysage de montagne"
          />
          <h1 className="main__homeBanner--title">
            Chez vous,<br className="main__homeBanner--title--breack"></br>{" "}
            partout et ailleurs
          </h1>
        </div>
        <section className="main__gallery--container">
          {isLoading ? (
            <div className="loader-center">
              <Loader />
            </div>
          ) : (
            <div className="main__gallery--thumb">
              <Gallery data={data} />
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;
