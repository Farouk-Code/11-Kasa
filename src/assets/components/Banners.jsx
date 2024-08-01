import bannerImage1 from "../../images/banner1-small.png";
import bannerImage2 from "../../images/banner2-small.png";

export const FirstBanner = () => {
  return (
    <div className="banner">
      <img src={bannerImage1} alt="First banner" className="banner-image banner1" />
      <div className="banner-text">
        Chez vous, <span className="text-mobil-split">parout et ailleurs</span>
      </div>
    </div>
  );
};

export const SecondBanner = () => {
  return (
    <div className="banner">
      <img src={bannerImage2} alt="Second banner" className="banner-image banner2" />
    </div>
  );
};
